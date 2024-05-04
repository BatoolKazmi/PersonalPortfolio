"use strict";

const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.getElementsByClassName('menu')[0];
const main = document.getElementsByTagName('main')[0];
const body = document.getElementsByTagName('body')[0];

function setupTopNav(e) {
    if (e.matches) {
        // mobile
        console.log('is mobile');
        topNavMenu.setAttribute('inert', '');
        topNavMenu.style.transition = 'none';
    }
    else {
        // not mobile (tablet/desktop)
        console.log('is desktop');
        topNavMenu.removeAttribute('inert');
        closeMobileMenu();
    }
}

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();

    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500)
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
    setupTopNav(e);
});