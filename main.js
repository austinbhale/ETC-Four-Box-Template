//// Lower Right Button - Clicked Amount ////
var lowerRightButton = document.getElementById("lower-right-button");
var counter = 0;

lowerRightButton.addEventListener("click", function () {
    counter++;
    lowerRightButton.children[0].children[0].innerText = "Clicked " + counter + " times";
});

//// Lower Left Button - Music ////
// For more information on making music with JS,
// head to Magenta's website: https://hello-magenta.glitch.me/.
var lowerLeftButton = document.getElementById("lower-left-button");
// Initialize a new Magenta player.
var player = new mm.Player();
var isPlaying = false;

lowerLeftButton.addEventListener("click", function () {
    if (isPlaying) {
        isPlaying = false;
        lowerLeftButton.children[0].children[0].innerHTML = "Stopped";
        player.stop();
    } else {
        isPlaying = true;
        lowerLeftButton.children[0].children[0].innerHTML = "Playing";
        playSequence();
    }
});

function playSequence() {
    // Players can also play at a different tempo
    //player.setTempo(200);
    
    TWINKLE_TWINKLE = {
        notes: [
          {pitch: 60, startTime: 0.0, endTime: 0.5},
          {pitch: 60, startTime: 0.5, endTime: 1.0},
          {pitch: 67, startTime: 1.0, endTime: 1.5},
          {pitch: 67, startTime: 1.5, endTime: 2.0},
          {pitch: 69, startTime: 2.0, endTime: 2.5},
          {pitch: 69, startTime: 2.5, endTime: 3.0},
          {pitch: 67, startTime: 3.0, endTime: 4.0},
          {pitch: 65, startTime: 4.0, endTime: 4.5},
          {pitch: 65, startTime: 4.5, endTime: 5.0},
          {pitch: 64, startTime: 5.0, endTime: 5.5},
          {pitch: 64, startTime: 5.5, endTime: 6.0},
          {pitch: 62, startTime: 6.0, endTime: 6.5},
          {pitch: 62, startTime: 6.5, endTime: 7.0},
          {pitch: 60, startTime: 7.0, endTime: 8.0},  
        ],
        totalTime: 8
      };

    player.start(TWINKLE_TWINKLE);
}

//// Upper Right Button - Speaking ////
// Adding some voice to your game is very useful for making games blind accessible!
var upperRightButton = document.getElementById("upper-right-button");
upperRightButton.addEventListener("click", function () {
    speak("Hello World");
});

function speak(read_text) {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    var message = new SpeechSynthesisUtterance(read_text);
    window.speechSynthesis.speak(message);
}