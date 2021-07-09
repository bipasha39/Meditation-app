const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');

    //sounds
    const songs = document.querySelectorAll('.sound-picker button');

    //Time Display
    const timeDisplay = document.querySelector('.time-display')
    const timeSelect = document.querySelectorAll('.time-display button')

    //Duration(you can chosse any duration)
    let fakeDuration = 600;

    //play sounds
    play.addEventListener('click', () => {
        playingSongs(song);
    });

    //Create a function specific to stop and play songs

    const playingSongs = song => {
        if (song.paused) {
            song.play();
            play.src = "./assets/pause.svg";
        } else {
            song.pause()
            play.src = "./assets/play.svg";
        }
    };
    //Animate the time 
    song.onTimeUpdate = function() {
        let currentDuration =song.currentDuration;
        let elapsed = fakeDuration - currentDuration;
        let seconds=Math.floor(elapsed % 60);
        let minutes =Math.floor(elapsed / 60);
        timeDisplay.textContent = `${minutes}:${seconds}`;
        if (currentDuration >= fakeDuration){
           currentDuration = 0;
           song.pause();
           play.src = "./assets/play.svg";
        }
    }
    
}
app();