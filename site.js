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
      navigator.clipboard.writeText("rajanbajajkota@gmail.com").then(
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
    ["experience", "openlens", "projects", "writing", "contact"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }
})();
