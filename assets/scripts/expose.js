// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const confetti = new JSConfetti();

  document.getElementById("horn-select").addEventListener("change", () => {
    document.querySelector("audio").src = `./assets/sounds/${document.getElementById("horn-select").value}.mp3`;
    document.querySelector("img").src = `./assets/images/${document.getElementById("horn-select").value}.svg`;
  });

  document.getElementById("volume").addEventListener("input", () => {
    document.querySelector("audio").volume = document.getElementById("volume").value / 100;

    if (volumeSlider.value === "0") {
      document.getElementById("volume-controls").querySelector("img").src = "./assets/icons/volume-level-0.svg";
    } else if (volumeSlider.value < 33) {
      document.getElementById("volume-controls").querySelector("img").src = "./assets/icons/volume-level-1.svg";
    } else if (volumeSlider.value < 67) {
      document.getElementById("volume-controls").querySelector("img").src = "./assets/icons/volume-level-2.svg";
    } else {
      document.getElementById("volume-controls").querySelector("img").src = "./assets/icons/volume-level-3.svg";
    }
  });

  document.querySelector("button").addEventListener("click", () => {
    if (document.getElementById("horn-select").value === "party-horn") {
      confetti.addConfetti();
    }
    document.querySelector("audio").play();
  });
}
