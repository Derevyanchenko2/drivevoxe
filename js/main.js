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

document.querySelectorAll('.accordion-title').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    const isActive = button.classList.contains('active');

    document.querySelectorAll('.accordion-title').forEach(item => {
      item.classList.remove('active');
      item.nextElementSibling.style.display = 'none';
    });

    if (!isActive) {
      button.classList.add('active');
      accordionContent.style.display = 'block';
    }
  });
});


document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const accordionItem = this.parentElement;

    // Toggle active class for the clicked accordion item
    accordionItem.classList.toggle('active');

    // Close other open accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = '0'; // Close other items
      }
    });

    // Open or close the clicked item
    const accordionContent = accordionItem.querySelector('.accordion-content');
    if (accordionItem.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = '0';
    }
  });
});



const ProductSwiper = new Swiper('.products-swiper', {
  // Optional parameters
  slidesPerView: 5, // Отображать 5 слайдов
  navigation: {
    nextEl: '.products-next-btn',
    prevEl: '.products-prev-btn',
  },
});

function closeLightbox() {
  const lightbox = document.querySelector('.lb-container');
  if (lightbox) {
      const closeButton = lightbox.querySelector('.lb-close');
      closeButton.click(); // Trigger Lightbox close functionality
  }
}