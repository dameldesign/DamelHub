let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

// let navbar = document.querySelector('nav')

// window.onscroll = function() {

//   // pageYOffset or scrollY
//   if (window.scrollY > 500) {
//     navbar.classList.add('scrolled')
//   } else {
//     navbar.classList.remove('scrolled')
//   }
// };