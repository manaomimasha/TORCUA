jQuery(document).ready(function ($) {
    //Buy button effects
    $(".buy").on("click", function () {
      //It is possible to put the 1st argument of setTimeout as callback of the Materialize.toast function but that approach seems significantly slower. I don't know why yet
      setTimeout(function () {
        $("#buy").removeClass("green");
        $(".buy").fadeOut(100, function () {
          $(this).text("add_shopping_cart").fadeIn(150);
        });
      }, 5000);
  
      $("#buy").addClass("green");
      $(".buy").fadeOut(100, function () {
        $(this).text("check").fadeIn(150);
      });
  
      var $toastContent = $(
        '<div class="flow-text">ORDERED! &nbsp <a href="#" class=" amber-text">MY CART</a></div>'
      );
      Materialize.toast($toastContent, 5000, "rounded");
    });
  
    //Like button effects
  
    $(".like").on("click", function () {
      setTimeout(function () {
        $(".like").fadeOut(100, function () {
          $(this).text("favorite_border").fadeIn(150);
        });
      }, 5000);
  
      $(".like").fadeOut(100, function () {
        $(this).text("favorite").fadeIn(150);
      });
  
      var $toastContent2 = $('<div class="flow-text">LIKED!</div>');
      Materialize.toast($toastContent2, 5000, "pink rounded");
    });
  });
  
  // MODAL
  
  const abrirModalBtn = document.getElementById('abrirModal');
  const miModal = document.getElementById('miModal');
  const cerrarModalBtn = document.getElementById('cerrarModal');
  
  abrirModalBtn.addEventListener('click', () => {
    miModal.style.display = 'block';
  });
  
  cerrarModalBtn.addEventListener('click', () => {
    miModal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === miModal) {
      miModal.style.display = 'none';
    }
  });
  
  
  
  let slides = document.getElementsByClassName("slider__slide");
  let navlinks = document.getElementsByClassName("slider__navlink");
  let currentSlide = 0;
  
  document.getElementById("nav-button--next").addEventListener("click", () => {
      changeSlide(currentSlide + 1)
  });
  document.getElementById("nav-button--prev").addEventListener("click", () => {
      changeSlide(currentSlide - 1)
  });
  
  function changeSlide(moveTo) {
      if (moveTo >= slides.length) {moveTo = 0;}
      if (moveTo < 0) {moveTo = slides.length - 1;}
      
      slides[currentSlide].classList.toggle("active");
      navlinks[currentSlide].classList.toggle("active");
      slides[moveTo].classList.toggle("active");
      navlinks[moveTo].classList.toggle("active");
      
      currentSlide = moveTo;
  }
  
  document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
      bullet.addEventListener('click', () => {
          if (currentSlide !== bulletIndex) {
              changeSlide(bulletIndex);
          }
      })
  })
  
  