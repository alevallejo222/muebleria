document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
ScrollReveal().reveal('.footer-links', { delay: 500 });
ScrollReveal().reveal('.grid-container grid-parent', { delay: 500 });
ScrollReveal().reveal('.footer', { delay: 500 });

// //Parallax

// let Parallax = document.querySelector('.parallax');
// let parrafo2 = document.querySelector('.parrafo2');
// function ScrollParallax() {
//   let scrollTop = document.documentElement.scrollTop;
//   Parallax.style.transform = 'translateY(' + scrollTop * - 0.1 + 'px)';
//   parrafo2.style.transform = 'translateY(' + scrollTop * 0.10 + 'px)';

// }

// window.addEventListener('scroll',
// ScrollParallax);


//No funciona (ultima revision previa al final de 2021)
