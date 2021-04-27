const name = document.querySelectorAll('form > div > *');


const sumbit = document.querySelector(".footer_btn");

sumbit.addEventListener('click', hi);

function hi(){
	let message = '';
	name.forEach(element => {
		message += "\n" + element.value;
	});

	alert("Your message:" + message);
}
