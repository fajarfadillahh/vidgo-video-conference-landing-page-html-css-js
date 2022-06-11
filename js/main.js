// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle");

// ===== TESTIMONIAL SWIPER =====
let swiper = new Swiper(".testimonial-swiper", {
  centeredSlides: true,
  slidesPerView: 1.1,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    duration: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// ===== ACCORDION FAQS SECTION =====
const accordionItems = document.querySelectorAll(".faqs__accordion-item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".faqs__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".faqs__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// ===== SCROLLUP SECTION =====
const scrollY = window.pageYOffset;

function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 250
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
