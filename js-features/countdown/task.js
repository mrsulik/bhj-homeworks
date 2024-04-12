const timer = document.getElementById("timer");

const timerCountDown = () => {   
  let counter = parseFloat(timer.textContent);
  timer.textContent = counter - 1;
  if (counter === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(countDown);
  }
};
let countDown = setInterval(timerCountDown, 1000);