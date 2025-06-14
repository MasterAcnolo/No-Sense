document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  if (!cards.length) {
    console.warn("Aucune carte trouvée dans le DOM.");
    return;
  }

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in");
    }, index * 150);
  });
});
