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


window.addEventListener("load", () => {
    const parentMenu = document.querySelectorAll('.parent-menu');
    const childMenu = document.querySelectorAll('.child-menu');
    parentMenu.forEach((parent, index) => {
        parent.addEventListener('click', () => {
            const currentChild = childMenu[index];
            childMenu.forEach((child, i) => {
                if (i !== index) {
                    child.classList.remove('active');
                }
            });
            currentChild.classList.toggle('active');
        });
    });
});

window.addEventListener("load", () => {
    const parentMenus = document.querySelectorAll('.sub-dropdown-manu');

    parentMenus.forEach((parent) => {
        parent.addEventListener('click', (e) => {
            e.stopPropagation();

            // close others
            parentMenus.forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                }
            });

            // toggle current
            parent.classList.toggle('active');
        });
    });
});
