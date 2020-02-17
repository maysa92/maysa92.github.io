document.getElementById('container-website').onclick = function(){
  window.open('threedscroll.html','_blank');
};

document.getElementById('container-website2').onclick = function(){
  window.open('quiz.html','_blank');
};


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

