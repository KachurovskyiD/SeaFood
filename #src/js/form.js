// Forms

// function forms() {

// 	const contactsForm = document.querySelector('.contacts__form');
// 	let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');

// 	const message = {
// 		success: 'Спасибо! Мы скоро свяжемся с Вами',
// 		failure: 'Произошла ошибка! Сообщение не отправлено...'
// 	};

// 	function form_validate(form) {
// 		let error = 0;
// 		let form_req = form.querySelectorAll('._req');
// 		if (form_req.length > 0) {
// 			for (let index = 0; index < form_req.length; index++) {
// 				const el = form_req[index];
// 				if (el.value !== '') {
// 					el.classList.remove('_error');
// 				} else {
// 					error += 1;
// 					el.classList.add('_error');
// 				}
// 			}
// 		}
// 		return error;
// 	}

// 	const postData = async (url, data) => {
// 		const res = await fetch(url, {
// 			method: "POST",
// 			headers: {
// 				'Content-type': 'application/json'
// 			},
// 			body: data
// 		});
// 		if (!res.ok) {
// 			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
// 		}
// 		return await res.json();
// 	};

// 	function bindPostData(form) {
// 		form.addEventListener('submit', (e) => {
// 			e.preventDefault();

// 			const formData = new FormData(form);
// 			const json = JSON.stringify(Object.fromEntries(formData.entries()));
// 			let error = form_validate(form);
// 			if (error == 0) {
// 				postData('http://localhost:3000/requests', json)
// 					.then(data => {
// 						console.log(data);
// 						showThanksModal(message.success);
// 					})
// 					.catch(err => {
// 						console.error(err);
// 						showThanksModal(message.failure);
// 					})
// 					.finally(() => {
// 						form.reset();
// 					});
// 			}
// 		});
// 	}

// 	function showThanksModal(message) {
// 		const prevModalDialog = document.querySelector('.modal');
// 		const modalContent = document.querySelector('.modal__content');
// 		prevModalDialog.classList.add('show');
// 		modalContent.textContent = `${message}`;

// 		setTimeout(() => {
// 			prevModalDialog.classList.add('hide');
// 			prevModalDialog.classList.remove('show');
// 		}, 3000);
// 	}

// 	function inputs_init(inputs) {
// 		if (inputs.length > 0) {
// 			for (let index = 0; index < inputs.length; index++) {
// 				const input = inputs[index];
// 				input.addEventListener('focus', function (e) {
// 					if (input.classList.contains('_phone')) {
// 						//'+7(999) 999 9999'
// 						//'+38(999) 999 9999'
// 						//'+375(99)999-99-99'
// 						input.classList.add('_mask');
// 						Inputmask("+38(999) 999 9999", {
// 							//"placeholder": '',
// 							clearIncomplete: true,
// 							clearMaskOnLostFocus: true
// 						}).mask(input);
// 					}
// 				});
// 			}
// 		}
// 	}

// 	inputs_init(inputs);
// 	bindPostData(contactsForm);

// }

// forms();