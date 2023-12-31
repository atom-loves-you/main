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
      name: "The Call of the Void",
      artist: "Atom Loves You",
      album: "L'appel du vide",
      url:
        "https://assets.codepen.io/6566924/Ad+Astra.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "L'appel du vide",
      url:
        "https://github.com/atom-loves-you/The-Call-of-the-Void/blob/main/Tweeters-Woofers-Heavy-Metal.mp3?raw=true",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Bitwise (Three)",
      artist: "Atom Loves You",
      album: "L'appel du vide",
      url:
        "https://github.com/atom-loves-you/The-Call-of-the-Void/blob/main/m4a/Call%20of%20the%20Void%20.m4a?raw=true",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Dusk To Dawn",
      artist: "Atom Loves You",
      album: "L'appel du vide",
      url:
        "https://github.com/atom-loves-you/The-Call-of-the-Void/blob/main/Call-of-the-Void.mp3?raw=true",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Anthem",
      artist: "Atom Loves You",
      album: "L'appel du vide",
      url:
        "https://github.com/atom-loves-you/samples/blob/main/bass-samples/Funky-Drill-n-Bass-Loop.wav?raw=true",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    }
  ]
});

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};