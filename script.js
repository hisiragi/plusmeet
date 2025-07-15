    window.addEventListener("load", () => {
      document.querySelector(".fade-in-text").classList.add("show");
      setTimeout(() => {
  document.querySelector('.fade-in-text').style.fontSize = '100px';
}, 0);
    });
    window.onload = function() {
      // ページ読み込み時に一番上にスクロール
      window.scrollTo(0, 0);