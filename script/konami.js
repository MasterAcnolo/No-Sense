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
      window.location.href = "https://youtu.be/dQw4w9WgXcQ";
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});