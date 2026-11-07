// Hero "request flow" scene: fine lanes of drifting points funnel from raw
// volume (left) into a collector ring (right) — raw records in, curated
// inventory out. Decorative only: no input, pauses offscreen, renders one
// static frame under prefers-reduced-motion, and aborts silently if WebGL
// or the CDN is unavailable (the page reads fine without it).
import * as THREE from "three";

const canvas = document.getElementById("flow");
const hero = canvas ? canvas.closest(".hero") : null;
if (!canvas || !hero) {
  // No stage: leave the page as-is.
} else {
  let renderer = null;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (err) {
    renderer = null;
  }

  if (renderer) {
    boot(renderer);
  }
}

function boot(renderer) {
  const LANES = 7;
  const PER_LANE = 90;
  const COUNT = LANES * PER_LANE;
  const X0 = -16;
  const X1 = 16;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 0.4, 15);
  camera.lookAt(2, 0, 0);

  // Lane guides: faint rails the points travel along, following the funnel.
  const SEG = 24;
  const railPos = new Float32Array(LANES * SEG * 2 * 3);
  const laneBase = [];
  const funnelOf = (x) => 1 - ((x - X0) / (X1 - X0)) * 0.55;
  for (let l = 0; l < LANES; l++) {
    const y = (l / (LANES - 1) - 0.5) * 10;
    laneBase.push(y);
    for (let s = 0; s < SEG; s++) {
      const xa = X0 + ((X1 - X0) * s) / SEG;
      const xb = X0 + ((X1 - X0) * (s + 1)) / SEG;
      railPos.set([xa, y * funnelOf(xa), -1, xb, y * funnelOf(xb), -1], (l * SEG + s) * 6);
    }
  }
  const railGeo = new THREE.BufferGeometry();
  railGeo.setAttribute("position", new THREE.BufferAttribute(railPos, 3));
  const rails = new THREE.LineSegments(
    railGeo,
    new THREE.LineBasicMaterial({ color: 0x0f5c46, transparent: true, opacity: 0.14 })
  );
  scene.add(rails);

  // Points: mostly deep green flow, a few gold "deals".
  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);
  const seed = new Float32Array(COUNT * 3); // x, phase, speed
  const green = new THREE.Color(0x0f5c46);
  const gold = new THREE.Color(0xc98a12);
  let i = 0;
  for (let l = 0; l < LANES; l++) {
    for (let k = 0; k < PER_LANE; k++, i++) {
      const x = X0 + ((X1 - X0) * k) / (PER_LANE - 1) + (Math.random() - 0.5) * 0.3;
      const phase = Math.random() * Math.PI * 2;
      const speed = 0.9 + Math.random() * 1.3;
      seed.set([x, phase, speed], i * 3);
      const c = Math.random() < 0.06 ? gold : green;
      col.set([c.r, c.g, c.b], i * 3);
    }
  }
  const dotGeo = new THREE.BufferGeometry();
  dotGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  dotGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));

  const sprite = makeSprite();
  const dots = new THREE.Points(
    dotGeo,
    new THREE.PointsMaterial({
      size: 0.26,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      sizeAttenuation: true,
    })
  );
  dots.frustumCulled = false;
  scene.add(dots);

  // Collector ring where the lanes converge.
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.15, 0.045, 12, 72),
    new THREE.MeshBasicMaterial({ color: 0xc98a12, transparent: true, opacity: 0.55 })
  );
  ring.position.set(12.5, 0, 0);
  scene.add(ring);
  const ringInner = new THREE.Mesh(
    new THREE.TorusGeometry(0.8, 0.03, 12, 64),
    new THREE.MeshBasicMaterial({ color: 0x0f5c46, transparent: true, opacity: 0.4 })
  );
  ringInner.position.copy(ring.position);
  scene.add(ringInner);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clock = new THREE.Clock();
  let running = true;
  let pointerX = 0;
  let pointerY = 0;

  function layout(time) {
    const arr = dotGeo.attributes.position.array;
    for (let n = 0; n < COUNT; n++) {
      const lane = Math.floor(n / PER_LANE);
      let x = seed[n * 3] + time * seed[n * 3 + 2];
      x = X0 + ((((x - X0) % (X1 - X0)) + (X1 - X0)) % (X1 - X0));
      const y = laneBase[lane] * funnelOf(x) + Math.sin(x * 0.5 + seed[n * 3 + 1]) * 0.35;
      arr[n * 3] = x;
      arr[n * 3 + 1] = y;
      arr[n * 3 + 2] = Math.cos(x * 0.3 + seed[n * 3 + 1]) * 0.4;
    }
    dotGeo.attributes.position.needsUpdate = true;
    ring.rotation.z = time * 0.15;
    ringInner.rotation.z = -time * 0.22;
  }

  function fit() {
    const w = Math.max(1, hero.clientWidth);
    const h = Math.max(1, hero.clientHeight);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  function frame() {
    const t = clock.getElapsedTime();
    layout(t);
    if (!reduceMotion) {
      camera.position.x += (pointerX * 1.2 - camera.position.x) * 0.03;
      camera.position.y += (0.4 + pointerY * 0.8 - camera.position.y) * 0.03;
      camera.lookAt(2, 0, 0);
    }
    renderer.render(scene, camera);
  }

  function makeSprite() {
    const s = 64;
    const c = document.createElement("canvas");
    c.width = s;
    c.height = s;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.4, "rgba(255,255,255,0.7)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  fit();
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(fit).observe(hero);
  } else {
    window.addEventListener("resize", fit);
  }

  if (!reduceMotion) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      pointerX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      pointerY = -(((e.clientY - r.top) / r.height - 0.5) * 2);
    });
    if (typeof IntersectionObserver !== "undefined") {
      new IntersectionObserver((entries) => {
        running = entries[0].isIntersecting;
      }).observe(hero);
    }
    const loop = () => {
      if (running) frame();
    };
    document.addEventListener("visibilitychange", () => {
      renderer.setAnimationLoop(document.hidden ? null : loop);
    });
    renderer.setAnimationLoop(loop);
  } else {
    layout(8);
    renderer.render(scene, camera);
  }
}
