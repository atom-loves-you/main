let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

if (theme == "dark") {
  document.documentElement.classList.add("dark");
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });

document.getElementById("song-saved").addEventListener("click", function () {
  document.getElementById("song-saved").classList.toggle("saved");
});

Amplitude.init({
  bindings: {
    37: "prev",
    39: "next",
    32: "play_pause"
  },
  callbacks: {
    timeupdate: function () {
      let percentage = Amplitude.getSongPlayedPercentage();

      if (isNaN(percentage)) {
        percentage = 0;
      }

      /**
       * Massive Help from: https://nikitahl.com/style-range-input-css
       */
      let slider = document.getElementById("song-percentage-played");
      slider.style.backgroundSize = percentage + "% 100%";
    }
  },
  songs: [
    {
      name: "Track 01: Ad Astra",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/Ad+Astra.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 02: Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/The-Call-of-the-Void/blob/main/Tweeters-Woofers-Heavy-Metal.mp3?raw=true",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 03: 143 Nao",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/Ad-Astra/blob/main/Ad-Astra-2024/143%20Nao.wav",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 04:Dusk To Dawn",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/The-Call-of-the-Void/blob/main/Call-of-the-Void.mp3?raw=true",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 05: Anthem",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/samples/blob/main/bass-samples/Funky-Drill-n-Bass-Loop.wav?raw=true",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    }
  ]
});

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};