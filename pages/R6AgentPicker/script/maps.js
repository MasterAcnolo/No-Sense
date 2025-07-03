const Maps = [
  { map: "Banque", image: "assets/maps/bank.avif" },
  { map: "Frontière", image: "assets/maps/border.avif" },
  { map: "Chalet", image: "assets/maps/chalet.avif" },
  { map: "Close Quarter", image: "assets/maps/closequarter.avif" },
  { map: "Club House", image: "assets/maps/clubhouse.avif" },
  { map: "Littoral", image: "assets/maps/coastline.avif" },
  { map: "Consulat", image: "assets/maps/consulate.avif" },
  { map: "District", image: "assets/maps/district.avif" },
  { map: "Plaines d'Émeraude", image: "assets/maps/emeraldplains.avif" },
  { map: "Favela", image: "assets/maps/favela.avif" },
  { map: "Forteresse", image: "assets/maps/fortress.avif" },
  { map: "Base d'Hereford", image: "assets/maps/herefordbase.avif" },
  { map: "Maison", image: "assets/maps/house.avif" },
  { map: "Kafe Dostoyevsky", image: "assets/maps/kafedostoyevsky.avif" },
  { map: "Kanal", image: "assets/maps/kanal.avif" },
  { map: "Lair", image: "assets/maps/lair.avif" },
  { map: "Laboratoires Nighthaven", image: "assets/maps/nighthavenlabs.avif" },
  { map: "Oregon", image: "assets/maps/oregon.avif" },
  { map: "Outback", image: "assets/maps/outback.avif" },
  { map: "Avion Présidentiel", image: "assets/maps/presidentialplane.avif" },
  { map: "Gratte-ciel", image: "assets/maps/skyscraper.avif" },
  { map: "Stade Alpha", image: "assets/maps/stadiumalpha.avif" },
  { map: "Stade Bravo", image: "assets/maps/stadiumbravo.avif" },
  { map: "Parc d'Attractions", image: "assets/maps/themepark.avif" },
  { map: "Tour", image: "assets/maps/tower.avif" },
  { map: "Villa", image: "assets/maps/villa.avif" },
  { map: "Yacht", image: "assets/maps/yacht.avif" }
];

function R6randomMap() {
  const randomMap = Maps[Math.floor(Math.random() * Maps.length)];
  const output = document.getElementById("map-output");

  output.innerHTML = `
    <p>${randomMap.map}</p>
    <img src="${randomMap.image}" alt="Carte Rainbow Six Siege">
  `;
}
