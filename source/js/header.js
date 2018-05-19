'use strict'

const burger = document.querySelector('.logo__burger-wrapper');
const cross = document.querySelector('.logo__cross-wrapper');
const nav = document.querySelector('.main-header__navigation');

burger.classList.remove('logo--no-js');
nav.classList.remove('navigation--no-js');

burger.addEventListener('click', function() {
  burger.classList.add('logo__closed');
  cross.classList.remove('logo__closed');
  nav.classList.remove('navigation--closed');
});

cross.addEventListener('click', function() {
  cross.classList.add('logo__closed');
  burger.classList.remove('logo__closed');
  nav.classList.add('navigation--closed');
});
