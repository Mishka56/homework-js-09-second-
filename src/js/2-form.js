let formData = {
	email: "",
	message: ""
};

const getForm = document.querySelector(".feedback-form")


getForm.addEventListener("input", handleInput)
getForm.addEventListener("submit", SubmitForm)

function handleInput(event) {
	event.preventDefault();
		formData.email = getForm.elements.email.value;
	formData.message = getForm.elements.message.value.trim(); 
	localStorage.setItem("feedback-form-state", JSON.stringify(formData));
	
}

const savedLocal = localStorage.getItem("feedback-form-state");
if (savedLocal) {
	formData = JSON.parse(savedLocal);
	getForm.elements.email.value = formData.email;
	getForm.elements.message.value = formData.message;
}

function SubmitForm(event) {
	event.preventDefault();
	const getElements = event.target.elements;
	formData.message = getElements.message.value;
	formData.email = getElements.email.value;
	if (formData.email.trim() === "" || formData.message.trim() === "") {
		return alert(`Fill please all fields`)
	}
	getForm.reset();
		localStorage.removeItem("feedback-form-state")
	console.log(formData);
}

