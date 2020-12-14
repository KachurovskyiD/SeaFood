 // Scroll top

 (function () {
   window.addEventListener("scroll", () => {
     let scrollTop = document.querySelector('.scroll-top');
     scrollTop.classList.toggle("scroll-topUp", window.scrollY > 500);
   });
 })();