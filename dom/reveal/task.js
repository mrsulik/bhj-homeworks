const reveal = [...document.querySelectorAll(".reveal")];

function revealActive(el) {
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom > 0 && top < window.innerHeight) {
    el.classList.add("reveal_active");
  } else {
    el.classList.remove("reveal_active");
  }
}
reveal.forEach((element) =>
  window.addEventListener("scroll", () => revealActive(element))
);