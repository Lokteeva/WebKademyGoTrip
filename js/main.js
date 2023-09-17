//Slider
const owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  loop: true,
  startPosition: 1,
  items: 3,
  margin: 30,  
});
$('.slider__btn--next').click(function () {
  owl.trigger('next.owl.carousel');
});
$('.slider__btn--pref').click(function () {
  owl.trigger('prev.owl.carousel');
});

//burgerMenu
const navBar = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBar.onclick = function () {
  nav.classList.toggle('nav--mobile');
  menuIcon.classList.toggle('menu-icon-active');
};
