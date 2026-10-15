(function () {
  "use strict";

  var fruits = Array.isArray(window.FRUITS) ? window.FRUITS : [];
  var total = fruits.length;
  var index = 0;

  var fmt = function (n) { return Number(n).toLocaleString("ar-EG"); };
  var $ = function (id) { return document.getElementById(id); };

  var textEl = $("fruit-text");
  var posEl = $("position");
  var prevBtn = $("prev");
  var nextBtn = $("next");

  $("hero-count").textContent = fmt(total);
  $("reader-count").textContent = fmt(total) + " ثمرة";

  function render() {
    if (!total) {
      textEl.textContent = "لا توجد ثمار بعد.";
      posEl.textContent = "";
      prevBtn.disabled = nextBtn.disabled = true;
      return;
    }
    var f = fruits[index];
    // textContent (never innerHTML) keeps the page safe from injected markup.
    textEl.textContent = f;
    textEl.classList.toggle("long", f.length > 90);
    posEl.textContent = fmt(index + 1) + " من " + fmt(total);
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;
  }

  function go(step) {
    var next = index + step;
    if (next < 0 || next >= total) return;
    index = next;
    render();
  }

  // The page is RTL: "next" sits on the right, so ArrowLeft advances.
  nextBtn.addEventListener("click", function () { go(1); });
  prevBtn.addEventListener("click", function () { go(-1); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") go(1);
    if (e.key === "ArrowRight") go(-1);
  });

  render();
})();
