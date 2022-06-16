// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const left_container = document.querySelector('.left-container');
const log_n=document.querySelector('.logo');
const sit_navigation=document.querySelector('.sit-navigation');
const sit_list=document.querySelector('.sit-list');
const sit_item=document.querySelectorAll('.sit-item');
const out_navigation=document.querySelector('.out-navigation');
const out_list=document.querySelector('.out-list');
const out_item=document.querySelectorAll('.out-item');
const _about=document.querySelector('.about');
const about_list=document.querySelector('.about-list');
const about_item=document.querySelectorAll('.about-item');



// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    left_container.classList.add('show');
    log_n.classList.add('show');
    sit_navigation.classList.add('show');
    sit_list.classList.add('show');
    sit_item.forEach(item => item.classList.add('show'));
    out_navigation.classList.add('show');
    out_list.classList.add('show');
    out_item.forEach(item => item.classList.add('show'));
    _about.classList.add('show');
    about_list.classList.add('show');
    about_item.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    left_container.classList.remove('show');
    log_n.classList.remove('show');
    sit_navigation.classList.remove('show');
    sit_list.classList.remove('show');
    sit_item.forEach(item => item.classList.remove('show'));
    out_navigation.classList.remove('show');
    out_list.classList.remove('show');
    out_item.forEach(item => item.classList.remove('show'));
    _about.classList.remove('show');
    about_list.classList.add('show');
    about_item.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}