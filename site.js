// Mobile nav, copy-email, active section highlight, footer year.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.hasAttribute("hidden");
      if (open) {
        mobileNav.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
        toggle.textContent = "Close";
      } else {
        mobileNav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mobileNav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  var copyBtn = document.getElementById("copy-email");
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText("rajanbajajkota+consultations@gmail.com").then(
        function () {
          copyBtn.textContent = "Copied ✓";
          setTimeout(function () { copyBtn.textContent = "Copy address"; }, 2000);
        },
        function () { copyBtn.textContent = "Copy failed — use the link"; }
      );
    });
  } else if (copyBtn) {
    copyBtn.style.display = "none";
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Office-hours request form: validate, then compose a mailto link the
  // visitor sends from their own email app. No backend, nothing stored.
  var form = document.getElementById("slot-form");
  if (form) {
    var errBox = document.getElementById("slot-error");
    var doneBox = document.getElementById("slot-done");
    var sendLink = document.getElementById("slot-link");
    var showError = function (msg) {
      if (!errBox) return;
      errBox.textContent = msg;
      errBox.removeAttribute("hidden");
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (errBox) errBox.setAttribute("hidden", "");
      var name = document.getElementById("f-name").value.trim();
      var email = document.getElementById("f-email").value.trim();
      var topic = document.getElementById("f-topic").value;
      var msg = document.getElementById("f-msg").value.trim();
      if (!name || !email || !msg) {
        showError("Please fill in your name, email, and a few lines of context.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("That email address doesn’t look right — mind checking it?");
        return;
      }
      var subject = "Office hours request: " + topic;
      var body = "Hi Rajan,\n\nName: " + name + "\nEmail: " + email
        + "\nTopic: " + topic + "\n\nContext:\n" + msg;
      var href = "mailto:rajanbajajkota+consultations@gmail.com?subject="
        + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      if (sendLink) sendLink.setAttribute("href", href);
      if (doneBox) {
        doneBox.removeAttribute("hidden");
        doneBox.scrollIntoView({ block: "nearest" });
      }
      try {
        window.location.href = href;
      } catch (err) {
        /* The visible link above is the fallback. */
      }
    });
  }

  // Highlight the nav link for the section in view.
  var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window && links.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.remove("active"); });
          var link = map[en.target.id];
          if (link) link.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ["experience", "openlens", "projects", "writing", "office-hours", "contact"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }

  // Field-notes journey: stamp sections as visited, remember progress.
  // Browser-only persistence; the page works the same when storage is off.
  var STOPS = ["experience", "openlens", "projects", "writing", "office-hours", "contact"];
  var KEY = "rb-field-notes-v1";
  var store = { stops: [], best: null };
  var storageOK = true;
  try {
    var saved = window.localStorage.getItem(KEY);
    if (saved) store = JSON.parse(saved) || store;
    if (!Array.isArray(store.stops)) store.stops = [];
    if (store.best !== null && typeof store.best !== "number") store.best = null;
  } catch (err) {
    storageOK = false;
  }
  function saveJourney() {
    if (!storageOK) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(store));
    } catch (err) {
      storageOK = false;
      renderJourney();
    }
  }
  var countEl = document.getElementById("journey-count");
  var fillEl = document.getElementById("journey-fill");
  function stamp(id) {
    var sec = document.getElementById(id);
    if (!sec || sec.querySelector(".stop-stamp")) return;
    var h = sec.querySelector("h2");
    if (!h) return;
    var s = document.createElement("span");
    s.className = "stop-stamp";
    s.textContent = "Logged";
    h.appendChild(s);
  }
  function renderJourney() {
    var n = store.stops.length;
    var suffix = storageOK ? "" : " · saving off in this browser";
    if (countEl) countEl.textContent = n + " of " + STOPS.length + " stops logged" + suffix;
    if (fillEl) fillEl.style.width = (n / STOPS.length * 100) + "%";
  }
  function visit(id) {
    if (store.stops.indexOf(id) !== -1) return;
    store.stops.push(id);
    stamp(id);
    saveJourney();
    renderJourney();
  }
  STOPS.forEach(function (id) {
    if (store.stops.indexOf(id) !== -1) stamp(id);
  });
  renderJourney();
  if ("IntersectionObserver" in window) {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) visit(en.target.id);
      });
    }, { threshold: 0.2 });
    STOPS.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) seen.observe(el);
    });
  }

  // Quiz: grade on submit, remember the best score on this device.
  var quizForm = document.getElementById("quiz-form");
  if (quizForm) {
    var quizResult = document.getElementById("quiz-result");
    var quizReset = document.getElementById("quiz-reset");
    var quizSubmit = quizForm.querySelector('button[type="submit"]');
    function setQuizDisabled(disabled) {
      Array.prototype.forEach.call(quizForm.querySelectorAll("input"), function (input) {
        input.disabled = disabled;
      });
      if (quizSubmit) quizSubmit.disabled = disabled;
    }
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var questions = Array.prototype.slice.call(quizForm.querySelectorAll(".quiz-q"));
      var score = 0;
      var answered = 0;
      questions.forEach(function (q) {
        q.classList.remove("is-right", "is-wrong");
        var picked = q.querySelector("input:checked");
        if (picked && picked.value === q.getAttribute("data-answer")) {
          score++;
          answered++;
          q.classList.add("is-right");
        } else {
          if (picked) answered++;
          q.classList.add("is-wrong");
        }
      });
      var best = (typeof store.best === "number") ? store.best : 0;
      if (score > best) {
        store.best = score;
        saveJourney();
        best = score;
      }
      if (quizResult) {
        var msg = "You scored " + score + " of " + questions.length + ".";
        if (answered < questions.length) msg += " Answer every question for a full score.";
        msg += " Best on this device: " + best + " of " + questions.length + ".";
        if (!storageOK) msg += " Saving is off in this browser, so the best score won't be kept.";
        quizResult.textContent = msg;
        quizResult.hidden = false;
      }
      if (quizReset) quizReset.hidden = false;
      setQuizDisabled(true);
    });
    if (quizReset) {
      quizReset.addEventListener("click", function () {
        quizForm.reset();
        Array.prototype.forEach.call(quizForm.querySelectorAll(".quiz-q"), function (q) {
          q.classList.remove("is-right", "is-wrong");
        });
        if (quizResult) {
          quizResult.textContent = "";
          quizResult.hidden = true;
        }
        quizReset.hidden = true;
        setQuizDisabled(false);
      });
    }
  }
})();
