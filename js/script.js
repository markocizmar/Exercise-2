//---------BURGER MENU----------//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//--------ACCORDION---------//

const accordion = document.getElementsByClassName('accordion-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

//--------SWIPER-------//

const swiperindex = new Swiper('.swiper-index', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper = new Swiper('.swiper-work', {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swipermobile = new Swiper('.swiper-mobile', {
  effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
});

//-------CONTACT-DROPDOWN-------//

var isOpen = false;

function toggleOptions(e) {

   isOpen = !isOpen;
   if (isOpen) {
      document.getElementById('selectContainer').style.visibility = 'visible';
      document.getElementById('selectContainer').focus();
   } else {
      document.getElementById('selectContainer').blur();
      document.getElementById('selectContainer').style.visibility = 'hidden';
   }
}

function selected(val) {
   document.getElementById('valueText').innerHTML = val;
   document.getElementById('selectedValue').val = val;
   toggleOptions();
}