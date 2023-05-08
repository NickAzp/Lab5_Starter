document.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const buttonaudio = document.querySelector("button");
  const textinput = document.getElementById("text-to-speak");
  const faces = document.querySelector("img");

  synth.addEventListener("voiceschanged", () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

  buttonaudio.addEventListener("click", () => {
    const voices = synth.getVoices();
    const utterThis = new SpeechSynthesisUtterance(textinput.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    faces.src = "assets/images/smiling-open.png";

    synth.speak(utterThis);

    utterThis.addEventListener("end", () => {
      faces.src = "assets/images/smiling.png";
    });

  });
}
