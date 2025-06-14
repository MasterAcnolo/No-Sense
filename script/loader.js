 window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.classList.add("fade-out");

        setTimeout(() => {
          loader.remove();
        }, 800); 
      });

// Pour l'embed Spotify de l'index:

document.querySelector('.spotify-button').addEventListener('click', function() {
  const container = this.parentElement;

  const iframe = document.createElement('iframe');
  iframe.src = "https://open.spotify.com/embed/track/2fIBmScNzkGmSJ3y2XsmEI?theme=white&view=coverart";
  iframe.width = "80%";
  iframe.height = "100%";
  iframe.frameBorder = "0";
  iframe.allow = "encrypted-media";
  iframe.loading = "lazy";
  iframe.style.borderRadius = "10px";

  container.innerHTML = '';  // supprime le bouton
  container.appendChild(iframe);  // insère l'iframe
});
