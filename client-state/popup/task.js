const popup = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

window.addEventListener("load", checkCookie);
modalClose.addEventListener("click", closePopup);
    
  function checkCookie(event) {
 if (!getCookie("isClosed")) {
        popup.classList.add('modal_active');
    }
}
const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        popup.classList.remove("modal_active");
    }
}
function closePopup(event) {
    event.preventDefault();
    document.cookie = "isClosed=true";
    popup.classList.remove("modal_active");
}
