window.onload = function () {

function showError(errorText) {
	var formMessage = document.querySelector('.form-message');
	formMessage.textContent = errorText;
	formMessage.classList.add('form-message-error');
}

	var form = document.querySelector('form');
	form.addEventListener('submit', function (event) {
		event.preventDefault();

		var name = document.querySelector('.form-name');
		var tel = document.querySelector('.phone-inp');
		var formMessage = document.querySelector('.form-message');
		//Поля «имя», «эл. почта» и «комментарий» должны быть заполнены.
		formMessage.textContent = '';
		formMessage.classList.remove('form-message-error');

		//Поля «имя», «эл. почта» и «комментарий» должны быть заполнены.
		if (name.value == 0 || tel.value == 0) {
			showError('Пожалуйста заполните все поля');
		}
		else if(name.value.length < 3) {
			showError('Имя должно быть не менее 3 символов');
		}

		else{
			formMessage.classList.add('form-message-success');
			var formMessageText = "";
			if (name.value.length != 0 || tel.value.length != 0) {
				formMessageText = 'Спасибо! Мы очень рады!'
			}
			formMessage.textContent = formMessageText;
		}

	});
}