const clicker = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
clicker.onclick = function () {
  clickerCounter.textContent++ % 2 == 0
    ? clicker.width = 230
    : clicker.width = 200;
};