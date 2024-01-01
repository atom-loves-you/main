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
      name: "Track 0: Ad Astra 1 (un-named)",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 0: Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/Tweeters%2C+Woofers%2C+Heavy+Metal+%28quick%29.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 0: H=h2p",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/H%3Dh2pi.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
     {
      name: "Track 0: Ad Astra",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/Ad+Astra.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 04: Otherkin",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/Otherkin.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 05: (unnamed)",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "./",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 06: H=h2p",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/H%3Dh2pi.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 07: Ooo",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/Ooo.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 08: 143 Nao",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/143+Nao.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 09: Last Track",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://assets.codepen.io/6566924/Last+track.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    }
  ]
});




window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};