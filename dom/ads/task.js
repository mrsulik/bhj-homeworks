const rotatorCase = [...document.querySelectorAll(".rotator__case")];
let index = 0;

function change(arr) {
  arr.forEach((element) => element.classList.remove("rotator__case_active"));

  for (let i = index; i <= arr.length; ) {
    arr[i].classList.add("rotator__case_active");    
    i += 1;
    if (i === arr.length) {
      i = 0;
    }
    index = i;
    break;
  }
}
setInterval(() => change(rotatorCase), 1000);