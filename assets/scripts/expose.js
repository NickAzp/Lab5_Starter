document.addEventListener("DOMContentLoaded", init);

function init() {
  
  const horn = document.getElementById("horn-select");
  const hornaudios = document.querySelector("audio");
  const hornimages = document.querySelector("img");
  const voloptions = document.getElementById("volume");
  const volicons = document.getElementById("volume-controls").querySelector("img");
  const soundbutton = document.querySelector("button");
  const confetti = new JSConfetti();

  horn.addEventListener("change", () => {
    const horntype = horn.value;
    hornaudios.src = `./assets/audio/${horntype}.mp3`;
    hornimages.src = `./assets/images/${horntype}.svg`;
  });

  voloptions.addEventListener("input", () => {
    const volume = document.getElementById("volume").value;
    hornaudios.volume = volume / 100;

    if (volume == 0) {
      volicons.src = "./assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volicons.src = "./assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volicons.src = "./assets/icons/volume-level-2.svg";
    } else {
      volicons.src = "./assets/icons/volume-level-3.svg";
    }
  });

  soundbutton.addEventListener("click", () => {
    if (horn.value === "party-horn") {
      confetti.addConfetti();
    }
    hornaudios.play();
  });
}