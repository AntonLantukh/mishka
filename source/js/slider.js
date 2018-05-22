'use strict'

const slides = document.querySelectorAll('.reviews__slide');
const buttonContainer = document.querySelector('.reviews__button-container');
let chosenElement;

buttonContainer.addEventListener('click', function(event) {
  slides.forEach((element) => {
    if (!element.classList.contains('visually-hidden')) {
      chosenElement = element;
    }
  });

  if (event.target.classList.contains('reviews__button--left') && chosenElement.previousSibling) {
    chosenElement.previousSibling.classList.remove('visually-hidden');
    chosenElement.classList.add('visually-hidden');
  }

  if (event.target.classList.contains('reviews__button--right') && chosenElement.nextSibling) {
    chosenElement.nextSibling.classList.remove('visually-hidden');
    chosenElement.classList.add('visually-hidden');
  }
});
