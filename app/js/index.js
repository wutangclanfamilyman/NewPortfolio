const btnOpenModal = document.querySelector('.btn-open-modal__image');
const btnCloseModal = document.querySelector('.modal-top-close');

const btnToggleMenu = document.querySelector('.aside__toggle-btn');


btnOpenModal.addEventListener('mouseover', () => {
    document.querySelector('.btn-open-modal').classList.add('btn-open-modal--hover');
});

btnOpenModal.addEventListener('mouseout', () => {
    document.querySelector('.btn-open-modal').classList.remove('btn-open-modal--hover');
});

btnOpenModal.addEventListener('click', () => {
    document.querySelector('.modal-top').classList.add('modal-top--open');
});

btnCloseModal.addEventListener('click', () => {
    document.querySelector('.modal-top').classList.remove('modal-top--open');
});

btnToggleMenu.addEventListener('click', () => {
    let menu = document.querySelector('.menu');
    if(menu.classList.contains('menu--open')) {
        menu.classList.remove('menu--open');
        btnToggleMenu.classList.remove('aside__toggle-btn--open');
    }
    else {
        menu.classList.add('menu--open');
        btnToggleMenu.classList.add('aside__toggle-btn--open');
    }
});