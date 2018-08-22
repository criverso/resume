$(function(){
    $(window).scroll(function() {
       if($(window).scrollTop() >= 100) {
         $('nav').addClass('scrolled');
       }
      else {
        $('nav').removeClass('scrolled');
      }
    });
  });

  $(function() {
    $('.footer-links-holder h3').click(function () {
      $(this).parent().toggleClass('active');
    });
  });