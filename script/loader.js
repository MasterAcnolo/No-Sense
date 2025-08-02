 window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.classList.add("fade-out");

        setTimeout(() => {
          loader.remove();
        }, 800); 
      });


document.querySelector('.spotify-button').addEventListener('click', function () {
  const container = this.parentElement;

  // Crée un wrapper pour centrer le loader
  const loadingWrapper = document.createElement('div');
  loadingWrapper.className = 'spotify-loading-wrapper';

  const loader = document.createElement('div');
  loader.className = 'spotify-loading';
  loader.textContent = 'Loading Spotify…';

  loadingWrapper.appendChild(loader);

  // Affiche le loader
  container.innerHTML = '';
  container.appendChild(loadingWrapper);

  // Crée l'iframe Spotify
  const iframe = document.createElement('iframe');
  iframe.src = "https://open.spotify.com/embed/track/2fIBmScNzkGmSJ3y2XsmEI?theme=white&view=coverart";
  iframe.width = "80%";
  iframe.height = "100%";
  iframe.frameBorder = "0";
  iframe.allow = "encrypted-media";
  iframe.loading = "lazy";
  iframe.style.borderRadius = "10px";
  iframe.style.display = "none";

  // Ajoute l'iframe pour démarrer le chargement
  container.appendChild(iframe);

  // Attente artificielle de 2 secondes avant d'afficher
  setTimeout(() => {
    container.innerHTML = ''; // Enlève le loader
    iframe.style.display = "block"; // Affiche le player
    container.appendChild(iframe); // Réappend proprement
  }, 1500);
});


