'use strict';

let megaMenu = document.querySelector('.mega-menu');
let menuButton = document.querySelector('.button-show');

menuButton.onclick = function() {
    menuButton.classList.toggle('button-color');
    megaMenu.classList.toggle('show');
    megaMenu.classList.toggle('hide');
  };