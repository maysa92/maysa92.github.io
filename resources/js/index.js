$(document).ready(function(){
  $('.menu-toggler').on('click',function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
  $('.top-nav .nav-link').on('click',function(){
    $('.top-nav').removeClass('open');
    setTimeout($('.menu-toggler').removeClass('open'), 2000);
  });

  AOS.init({
    easing:'ease',
    duration: 1800,
    once: true
  });

});

