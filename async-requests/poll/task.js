const title = document.getElementById("poll__title");
const answersPoll = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.addEventListener("readystatechange", (event) => {
  if (xhr.readyState === xhr.DONE) {
    const data = JSON.parse(xhr.responseText).data;
    title.innerText = data.title;

    for (const answer of data.answers) {
      const button = `<button class="poll__answer">${answer}</button>`;

      answersPoll.insertAdjacentHTML("beforeend", button);
    }
    const answerButtons = document.querySelectorAll(".poll__answer");
    for (const answerButton of answerButtons) {
      answerButton.addEventListener("click", () =>
        alert("Спасибо, ваш голос засчитан!")
      );
    }
  }
});
xhr.send();