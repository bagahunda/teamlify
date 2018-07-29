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

    const siema = new Siema({
      perPage: {
        1024: 3,
      },
    });

    const siemaControls = document.querySelectorAll('.siema-controls button');
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

  });

})(jQuery);
