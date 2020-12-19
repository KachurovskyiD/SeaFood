// Counter

let time = 1;
const counter = document.querySelector('.counter');
window.addEventListener('scroll', startCount);

function startCount() {
  if (counter.classList.contains("_active")) {
    $(".number").each(function () {
      let i = 4,
        num = $(this).data("num"),
        step = 1000 * time / num,
        that = $(this),
        int = setInterval(function () {
          if (i <= num) {
            that.html(i);
          } else {
            clearInterval(int);
          }
          i++;
          window.removeEventListener('scroll', startCount);
        }, step);
    });
  }
}