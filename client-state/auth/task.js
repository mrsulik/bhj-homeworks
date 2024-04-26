const signIn = document.getElementById("signin");
const signInForm = document.getElementById("signin__form");
const signInBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const storedId = localStorage.getItem("storedUserId");

if (storedId) {
  signIn.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.textContent = storedId;
}

signInBtn.addEventListener("click", (event) => {
  event.preventDefault();
  event.target.reset(); 
  const formData = new FormData(signInForm);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    let response = xhr.response;

    if (response["success"] === false) {
      alert("Неверный логин/пароль");
      signInForm.reset();
    } else {
      signIn.classList.remove("signin_active");
      welcome.classList.add("welcome_active");
      let storedUserId = response["user_id"];
      userId.textContent = storedUserId;
      localStorage.storedUserId = storedUserId;
    }
  });
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
  xhr.responseType = "json";
  xhr.send(formData);
});