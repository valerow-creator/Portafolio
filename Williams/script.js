'use strict';

const hamburger = document.querySelector('.fa-bars');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', displayNavBar);

function displayNavBar() {
  navigation.classList.toggle('hide');
}
