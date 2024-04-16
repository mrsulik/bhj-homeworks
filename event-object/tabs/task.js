
const tabMenu = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");

const tabChange = (event) => {
  for (let tab of tabMenu) {
    tab.className = "tab";
  }
  event.target.className = "tab tab_active";

  for (let content of tabContent) {
    content.className = "tab__content";
  }
  const index = Array.from(tabMenu).indexOf(event.target);
  tabContent[index].className = "tab__content tab__content_active";
};

for (let tab of tabMenu) {
  tab.addEventListener("click", tabChange);
}
