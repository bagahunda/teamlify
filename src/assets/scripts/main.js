(function ($) {

  $('document').ready(function() {

    $('a[href*="#"]:not([href="#"])').click(function() {
      const winWidth = window.innerWidth;
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          if (myMenu.classList.contains('menu--visible')) {
            toggleClassMenu();
          }
          if (winWidth < 700) {
            $('html, body').animate({
              scrollTop: target.offset().top - 87
            }, 1000);
          } else {
            $('html, body').animate({
              scrollTop: target.offset().top - 100
            }, 1000);
          }
          return false;
        }
      }
    });

    function toggleClassMenu() {
      myMenu.classList.add("menu--animatable");
      if(!myMenu.classList.contains("menu--visible")) {
          myMenu.classList.add("menu--visible");
      } else {
          myMenu.classList.remove('menu--visible');
      }
    }

    function OnTransitionEnd() {
      myMenu.classList.remove("menu--animatable");
    }

    let myMenu = document.querySelector(".menu");
    let oppMenu = document.querySelector(".menu-icon");
    myMenu.addEventListener("transitionend", OnTransitionEnd, false);
    oppMenu.addEventListener("click", toggleClassMenu, false);
    myMenu.addEventListener("click", toggleClassMenu, false);

    $('.updates-slider').slick({
      arrows: false,
      mobileFirst: true,
      dots: true,
      slidesToShow: 2,
      infinite: false,
      responsive :[
        {
          breakpoint: 899,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });

    $('.siema').slick({
      arrows: false,
      mobileFirst: true,
      dots: true,
      responsive :[
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  });

})(jQuery);
