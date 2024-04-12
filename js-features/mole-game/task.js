const win = document.getElementById("dead");
const loss = document.getElementById("lost");
for (let i = 1; i < 10; i++) {
  const getHole = document.getElementById(`hole${i}`);
  getHole.onclick = function () {
    if (getHole.classList.contains("hole_has-mole")) {
      win.textContent++;
    } else {
      loss.textContent++;
    }
    if (win.textContent == 10) {
      setTimeout(() => {
        alert("Победа");
        win.textContent = 0;
        loss.textContent = 0;
      }, 100);
    }
    if (loss.textContent == 5) {
      setTimeout(() => {
        alert("Поражение");
        win.textContent = 0;
        loss.textContent = 0;
      }, 100);
    }
  };
}