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

/* Tweeters, Woofers, Heavy Metal - Passed Test-01 12 Jan 2024 */ 
{name: "01 Tweeters, Woofers, Heavy Metal",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/Tweeters-Woofers-Heavy+Metal.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* The Summer Of George - Passed Test-01 12 Jan 2024 */ 
{name: "02 The Summer Of George",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/The-Summer-of-George.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* Otherkin - Test-01 12 Jan 2024 */ 
{name: "03 Otherkin",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/Otherkin.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* Diabolus ex Machina- Test-01 12 Jan 2024 */
/* NOTE: This track has also been called: 1. Diabolus ex Machina, 2. Call of the Void, and 3. Ad5 */
/* I am Using file: `Diabolus ex Machina-Updated-‎January ‎12, ‎2024.wav/mp3` in the playlist as of the 12th of Jan, 2024.*/
{name: "04 Diabolus ex Machina",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/Diabolus-ex-Machina-Updated-Spring-2024-%E2%80%8EJan-12-2024.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* ℏ = h/2π - Passed Test-01 12 Jan 2024 */
{name: "05 ℏ = h/2π",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/%E2%84%8F+%3D+h%2F2%CF%80.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},

/* Just Don't Write Bugs - Passed Test-01 12 Jan 2024 */
{name: "06 Just Don't Write Bugs",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/Just-Don-t-Write-Bugs.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* Ad Astra - Passed Test-01 12 Jan 2024 */
{name: "07 Ad Astra",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"./",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},

/* L'appel du Vide (The Call of the Void) - Passed Test-01 12 Jan 2024 */
{name: "08 L'appel du Vide (The Call of the Void)",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/L-appel+du+Vide.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* Title - Passed Test-01 12 Jan 2024 */
{name: "09 Track Title",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"./",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* Title - Passed Test-01 12 Jan 2024 */
{name: "10 Track Title",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"./",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* Title - Passed Test-01 12 Jan 2024 */
{name: "11 Track Title",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"./",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* Title - Passed Test-01 12 Jan 2024 */
{name: "12 Track Title",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"./",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},


/* Title - Passed Test-01 12 Jan 2024 */
{name: "13 Track Title",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"./",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},




/* Lo-fi - Passed Test-01 12 Jan 2024 */
{name: "SORT-Lo-fi",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/Lo+fi+.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"},

/* MySong-36- Passed Test-01 12 Jan 2024 */
{name: "SORT-MySong-36",
artist: "Atom Loves You",
album: "Ad Astra per Aspera",
url:"https://assets.codepen.io/6566924/My+Song+36.mp3",
cover_art_url: "https://assets.codepen.io/6566924/bright-colors-grid-square.png"}

]
});
window.onkeydown = function (e) {
  return !(e.keyCode == 32);
};


/* https://assets.codepen.io/6566924/Lo+fi+.mp3 */
/* https://assets.codepen.io/6566924/Call+of+the+Void+-+not+actually+-+rename+this.mp3 */