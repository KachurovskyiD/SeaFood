// Counter

let time = 1;

$(".counter__value").each(function () {
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
    }, step);
});