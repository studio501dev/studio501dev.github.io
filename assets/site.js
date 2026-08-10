document.documentElement.classList.add("js");

const revealItems = [...document.querySelectorAll("[data-reveal]")];
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -7%", threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const mobileMenu = document.querySelector(".mobile-nav");
if (mobileMenu) {
  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => mobileMenu.removeAttribute("open")));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") mobileMenu.removeAttribute("open");
  });
}
