const textArea = document.getElementById("editor");
const storedText = localStorage.getItem("textValue");
const clearText = document.getElementById("clearText");
const clearAll = document.getElementById("clearAll");

textArea.addEventListener("input", () => {
  localStorage.textValue = textArea.value;
});
textArea.value = storedText;

clearText.addEventListener("click", clearTextArea);
clearAll.addEventListener('click', clearTextArea);

function clearTextArea(event) {
   event.preventDefault();
      if (event.target === clearText) {
        localStorage.removeItem("text");
        textArea.value = "";
    } else {
        localStorage.clear();
        textArea.value = "";
    }
}