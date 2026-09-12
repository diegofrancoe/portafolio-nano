const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

const animatedDetails = document.querySelectorAll(".brand i, .title-dot, .orbit");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const dotObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-arriving");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.65 },
  );

  animatedDetails.forEach((detail) => dotObserver.observe(detail));
}
