// Offer

const offer = document.querySelector('.offer');
const progressValue_1 = document.querySelector('.progress-value-1');
const progressValue_2 = document.querySelector('.progress-value-2');
const progressValue_3 = document.querySelector('.progress-value-3');

window.addEventListener('scroll', startProgress);

function startProgress() {
  if (offer.classList.contains("_active")) {
    progressValue_1.classList.add('bar-1')
    progressValue_2.classList.add('bar-2')
    progressValue_3.classList.add('bar-3')
  }
}