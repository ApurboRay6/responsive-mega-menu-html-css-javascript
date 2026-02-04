// DOM Element
let menuOpenBtn = document.querySelector('#mobile-menuBtn');
let popupSidebarSec = document.querySelector('.popup_sidebar_sec');
let closeBtn = document.querySelector("#closeBtn")
let bodyClass = document.querySelector("body")


menuOpenBtn.addEventListener('click', function () {
    popupSidebarSec.classList.add('active');
    bodyClass.classList.add('addOverly');
});

closeBtn.addEventListener('click', function () {
    popupSidebarSec.classList.remove('active');
    bodyClass.classList.remove('addOverly');
});


const parentMenu = document.querySelector('.parent-menu');
const childMenu = document.querySelector('.child-menu');

parentMenu.addEventListener('click', function () {
    childMenu.classList.toggle('active');
});

