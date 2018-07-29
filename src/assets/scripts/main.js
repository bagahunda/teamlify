(function ($) {

  $('document').ready(function() {

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

    const progress = new Siema({
      selector: '.updates-slider',
      perPage: {
        320: 2,
        600: 3
      },
      onChange: function() {
        const target = document.querySelector('.updates-slider');
        if (progress.currentSlide === 1) {
          target.style.paddingLeft = "12%";
        } else {
          target.style.paddingLeft = "20px";
        }

      }
    })

    const siema = new Siema({
      perPage: {
        1024: 3,
      }
    });

    const siemaControls = document.querySelectorAll('.updates-container .siema-controls button');
    siemaControls[0].classList.add('active');
    const buttons = Array.prototype.slice.call(siemaControls);
    for (let i of buttons) {
      i.addEventListener('click', () => {
        siema.goTo(buttons.indexOf(i))
        let active = document.querySelector('.active');
        active.classList.remove('active');
        siemaControls[buttons.indexOf(i)].classList.add('active');
      });
    }

    const updatesControls = document.querySelectorAll('.slider-container .siema-controls button')
    updatesControls[0].classList.add('active');
    const controlButtons = Array.prototype.slice.call(updatesControls);
    for (let i of controlButtons) {
      i.addEventListener('click', () => {
        progress.goTo(controlButtons.indexOf(i))
        let active = document.querySelector('.active');
        active.classList.remove('active');
        updatesControls[controlButtons.indexOf(i)].classList.add('active');
      });
    }
  });

})(jQuery);
