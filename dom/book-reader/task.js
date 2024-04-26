const fontSize = [...document.querySelectorAll(".font-size")];
const book = document.querySelector(".book");

fontSize.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let index = fontSize.indexOf(item);
    fontSize[index].classList.add("font-size_active");

    let newFontSize = fontSize.filter((elem) => elem !== fontSize[[index]]);
    newFontSize.forEach((item) => item.classList.remove("font-size_active"));

    if (item.dataset.size === "small") {
      book.classList.remove("book_fs-big");
      book.classList.add("book_fs-small");
    }
    if (item.dataset.size === "big") {
      book.classList.remove("book_fs-small");
      book.classList.add("book_fs-big");
    }
    if (!item.dataset.size) {
      book.classList.remove("book_fs-small");
      book.classList.remove("book_fs-big");
    }
  });
});
