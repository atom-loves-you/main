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
      name: "Track 02: Ad Astra 1 (un-named)",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/main/blob/main/mp3/Ad%20Astra%201.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 03: Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/main/blob/main/mp3/Tweeters%2C%20Woofers%2C%20Heavy%20Metal%20(quick).mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 04: Otherkin",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/main/blob/main/mp3/Otherkin.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 05: Ad-6 (unnamed)",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/main/blob/main/mp3/Ad%206.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 06: H=h2p",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/main/blob/main/mp3/H%3Dh2pi.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 07: Ooo",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/main/blob/main/mp3/Ooo.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 08: 143 Nao",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/main/blob/main/mp3/143%20Nao.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    },
    {
      name: "Track 09: Last Track",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url:
        "https://github.com/atom-loves-you/main/blob/main/mp3/Last%20track.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"
    }
  ]
});




window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};