$(document).ready(function () {

  // Anchor link
  $('.anchor-link').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

  // Show menu mobail
  $('.navbar-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.nav').slideToggle(200);
  });

  if($(window).width() < 992) {
    $('.nav__list li a').on('click', function() {
      $('.navbar-toggle').toggleClass('active');
      $('.nav').slideUp(200);
    });
  }

  // Reviews sl
  var swiper = new Swiper(".reviews__sl", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    autoHeight: true,
    centeredSlides: true,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        autoHeight: false
      },
      992: {
        spaceBetween: 32,
        autoHeight: false
      },
    },
  });

});