const loader = document.getElementById("loader");
const requestOnDesk = document.getElementById("items");
const xhr = new XMLHttpRequest();
let localValute = JSON.parse(localStorage.getItem("localValute"));

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.addEventListener("load", (event) => {
  
   if (xhr.readyState === xhr.OPENED) {
        if (localValute != null) {
            loader.classList.remove("loader_active");
            addValute(localValute);
        }
    }
  
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");
    requestOnDesk.innerHTML = "";
    const responseServer = JSON.parse(xhr.responseText).response.Valute;
    addValute(responseServer);
  }
});

function addValute(responseServer) {
  for (let valute in responseServer) {
    let item = document.createElement("div");
    item.classList.add("item");
    requestOnDesk.appendChild(item);
    item.insertAdjacentHTML(
      "beforeBegin",
      `<div class="item">
                    <div class="item__code">
                      ${responseServer[valute].CharCode}</div>
                    <div class="item__value">${responseServer[valute].Value}</div>
                    <div class="item__currency">руб.</div>
                 </div>`
    );
  }
}
xhr.send();

function updateList (responseServer) {
    localStorage.setItem("localValute", JSON.stringify(responseServer));
} 