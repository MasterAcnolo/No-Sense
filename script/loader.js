 window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        document.body.classList.remove("loading");
        loader.classList.add("fade-out");

        setTimeout(() => {
          loader.remove();
        }, 800); 
      });


// C'est utile de mettre ça si jamais j'ai un soucis avec l'audioplayer
// async function alertSpotify(){
//   alert("Sorry, not working actually :(")
// }