console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Your form has been submitted.')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);