const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", () => {
        let text = drum[i].textContent;
        playButton(text);
        anim(text);
    })
}

window.addEventListener("keypress", (e) => {
    let text = e.key;
    playButton(text);
    anim(text);
})

function playButton(key) {
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            let tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            let tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            let tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;

        default:
            break;
    }
}

function anim(key) {
    let drum = document.querySelector('.${key}');
    drum.classList.add("pressed");
    setTimeout(() => {
        drum.classList.remove("pressed");
    }, 100)
}