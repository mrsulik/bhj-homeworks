const dropMenu = document.querySelector(".dropdown__value");
const dropList = document.querySelector(".dropdown__list");
const links = document.querySelectorAll(".dropdown__link");

dropMenu.addEventListener("click", () => {
   if (dropList.className === "dropdown__list") {
    dropList.className = "dropdown__list_active";
   }    else {
     dropList.className = "dropdown__list";
   }
});
  
     links.forEach((link) => {
     link.addEventListener("click", (event) => {
        event.preventDefault();
       dropMenu.textContent = event.target.textContent;     
       dropList.className = "dropdown__list";
     });
   }); 