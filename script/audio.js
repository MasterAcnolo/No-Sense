const audio = document.getElementById('myAudio');
    audio.volume = 0.3; 
    const playBtn = document.getElementById('playBtn');
    const playIconPlay = document.getElementById('playIconPlay');
    const playIconPause = document.getElementById('playIconPause');
    const volumeSlider = document.getElementById('volumeSlider');
    const currentTime = document.getElementById('currentTime');
    const duration = document.getElementById('duration');
    const seekSlider = document.getElementById('seekSlider');

    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    }

    audio.addEventListener('loadedmetadata', () => {
      duration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      currentTime.textContent = formatTime(audio.currentTime);
      seekSlider.value = (audio.currentTime / audio.duration) * 100;
    });

    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playIconPlay.style.display = 'none';
        playIconPause.style.display = 'inline';
      } else {
        audio.pause();
        playIconPlay.style.display = 'inline';
        playIconPause.style.display = 'none';
      }
    });

    volumeSlider.addEventListener('input', () => {
      audio.volume = volumeSlider.value;
    });

    seekSlider.addEventListener('input', () => {
      audio.currentTime = (seekSlider.value / 100) * audio.duration;
    });

    function openSpotify() {
      // const url = "https://open.spotify.com/intl-fr/track/2fIBmScNzkGmSJ3y2XsmEI?si=b3b65dd377ff4436"; URL MUSIQUE
      const url = "https://lyricstranslate.com/en/yamakasi-yamakasi.html";
      window.open(url, '_blank');
    }