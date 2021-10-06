const sounds = document.getElementsByClassName('sounds')
//play sound function
const playSound = (soundName) => {
    let audio = new Audio(`sounds/${soundName}.wav`)
    audio.play()
}
//play sound on keypress
document.body.addEventListener('keypress',(e)=>{
    let keyPressed = e.key

    switch (keyPressed){
        case "q":
            playSound("boom")
            break;
        case "w":
            playSound("clap")
            break;
        case "e":
            playSound("hihat")
            break;
        case "r":
            playSound("kick")
            break;
        case "t":
            playSound("openhat")
            break;
        case "y":
            playSound("ride")
            break;
        case "u":
            playSound("snare")
            break;
        case "i":
            playSound("tink")
            break;
        case "o":
            playSound("tom")
            break;
        default:
            break;

    }
})
//play sound on click
for (const sound of sounds){
        sound.addEventListener('click',(e)=>{
            let soundName = e.target.innerText
            playSound(soundName);
        })
    }




