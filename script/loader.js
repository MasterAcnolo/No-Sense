 window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.classList.add("fade-out");

        setTimeout(() => {
          loader.remove();
        }, 800); 
      });



async function alertSpotify(){
  alert("Sorry, not working actually :(")
}

// document.querySelector('.spotify-button').addEventListener('click', function () {
//   const container = this.parentElement;

//   // Nettoie le container
//   container.innerHTML = '';

//   // Crée l'iframe Spotify
//   const iframe = document.createElement('iframe');
//   iframe.src = "https://open.spotify.com/embed/track/2fIBmScNzkGmSJ3y2XsmEI?theme=white&view=coverart";
//   iframe.width = "80%";
//   iframe.height = "100%";
//   iframe.frameBorder = "0";
//   iframe.allow = "encrypted-media";
//   iframe.loading = "lazy";
//   iframe.style.borderRadius = "10px";
//   iframe.className = "spotify-iframe";

//   // Crée un overlay de chargement
//   const overlay = document.createElement('div');
//   overlay.className = 'spotify-loader-overlay';
//   overlay.innerHTML = `
//     <div class="loader-circle"></div>
//     <p>Loading Spotify…</p>
//   `;

//   // Ajoute tout
//   container.appendChild(iframe);
//   container.appendChild(overlay);

//   // Enlève l’overlay après un délai (2 secondes ici)
//   setTimeout(() => {
//     overlay.classList.add('hide');
//     setTimeout(() => overlay.remove(), 500); // supprime du DOM après l’anim
//   }, 2000);
// });
