// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});

// reviews slider
const swiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: false,  
  slidesPerView: 1,
  spaceBetween: 30, 
  speed:800,
  navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
  },
});