(() => {
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("nav");
  const toggle = document.querySelector(".nav-toggle");
  const modal = document.getElementById("login-modal");
  const openers = document.querySelectorAll("[data-open-login]");
  const closers = document.querySelectorAll("[data-close-login]");

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle?.addEventListener("click", () => {
    const open = !nav?.classList.contains("is-open");
    nav?.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  const openModal = () => {
    modal?.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    modal?.querySelector("input")?.focus();
  };

  const closeModal = () => {
    modal?.setAttribute("hidden", "");
    document.body.style.overflow = "";
  };

  openers.forEach((btn) => btn.addEventListener("click", openModal));
  closers.forEach((btn) => btn.addEventListener("click", closeModal));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hasAttribute("hidden")) {
      closeModal();
    }
  });

  modal?.querySelector(".login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(window.GSMAG_I18N?.loginAlert || "Espace client prêt à être branché sur votre serveur ESSANET.");
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
})();
