const pianoKeys = document.querySelectorAll(".piano-keys .key"),
	volumeSlider = document.querySelector(".volume-slider input"),
	keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys =[],
	audio = new Audio();

const playTune = (key) => {
	audio.src = `tunes/${key}.wav`;
	audio.play();

	const clickedKey = document.querySelector(`[data-key="${key}"]`);
	if(clickedKey) {
		clickedKey.classList.add("active");
		setTimeout(() => {
			clickedKey.classList.remove("active");
		},150);
	}
};

pianoKeys.forEach(key => {
	allKeys.push(key.dataset.key.toLowerCase());
	key.addEventListener("click", () => playTune(key.dataset.key));

});

const handleVolume = (e) => {
	audio.volume = e.target.value;
};

const showHideKeys = () => {
	pianoKeys.forEach(key => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
	let keyPressed = e.key.toLowerCase();
	if (allKeys.includes(keyPressed)) {
		playTune(keyPressed);
	}
};

keysCheckbox.addEventListener("click",showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown",pressedKey);