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
    32: "play_pause",
  },
  callbacks: {
    timeupdate: function () {
      let percentage = Amplitude.getSongPlayedPercentage();

      if (isNaN(percentage)) {
        percentage = 0;
      }

      let slider = document.getElementById("song-percentage-played");
      slider.style.backgroundSize = percentage + "% 100%";
    },
  },

  songs: [
    //Tweeters, Woofers, Heavy Metal
    {
      name: "Tweeters, Woofers, Heavy Metal",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Tweeters-Woofers-Heavy+Metal.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //Summer of George
    {
      name: "Track 02: Summer of George",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/Summer+of+George%28cleanup+live%29.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //Otherkin
    {
      name: "Track 03: Otherkin",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/Otherkin.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //Ooo
    {
      name: "Track 04: Unnanmed",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/Ooo.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //ℏ = h/2π
    {
      name: "ℏ = h/2π",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/%E2%84%8F+%3D+h%2F2%CF%80.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //Just Don't Write Bugs
    {
      name: "Track 06: Just Don't Write Bugs",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/143+Nao.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //Ad Astra
    {
      name: "Track 06: Ad Astra",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/Ad+Astra.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //Data is Destiny,
    //Ad Astra 1
    {
      name: "Track 07: Unnamed",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/Data+is+Destiny.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //L'appel du vide
    {
      name: "Track 08: L'appel du vide",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/m4a_Call+of+the+Void+.m4a",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },
    //143 Nao
    {
      name: "Track 09: 143 Nao",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/143+Nao.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },

    //Diabolus ex Machina
    {
      name: "Track 10: (unnamed)",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/Diabolus+ex+Machina.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },
    //Last Track
    {
      name: "Track 11: Last Track (Unnamed)",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera, 2023",
      url: "https://assets.codepen.io/6566924/Last+track.mp3",
      cover_art_url:
        "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },
  ],
});

window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};
