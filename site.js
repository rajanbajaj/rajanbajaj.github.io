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
      var href = "mailto:rajanbajajkota@gmail.com?subject="
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
})();
