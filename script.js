const pianokeys = document.querySelectorAll(".piano-keys .key"),
 volumeSlider = document.querySelector(".volume-slider input"),
 keyscheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [],
 audio = new Audio("tunes/a.wav")

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();
// console.log(allkeys);

    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    
    setTimeout(() => {
        clickedkey.classList.remove("active");

    }, 300);
}




pianokeys.forEach(key => {

    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
// console.log(key.dataset.key);
});

const handleVolume = (e) =>{
    audio.volume = e.target.value;
} 


function showHidekeys() {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}


const pressedkey = (e) => {
    if (allkeys.includes(e.key))
        playTune(e.key);
}


keyscheckbox.addEventListener("click", showHidekeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);




























