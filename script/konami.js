const konamiCode = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a'
];

let konamiIndex = 0;
window.addEventListener('keydown', function(e) {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      window.location.href = "https://www.youtube-nocookie.com/v/dQw4w9WgXcQ?autoplay=1";
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});