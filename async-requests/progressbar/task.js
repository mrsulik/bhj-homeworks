const progressValue = document.getElementById("progress");

form.addEventListener("submit", event => {
	
	event.preventDefault();

	const form = document.getElementById("form");
	const formData = new FormData(form);

	const xhr = new XMLHttpRequest();
	xhr.open("POST", "");  //здесь должна быть ссылка, из-за которой Касперский удаляет весь файл
	xhr.upload.onprogress = function (event) {
		progressValue.value = event.loaded / 1000000;
	}
	xhr.send(formData);
});