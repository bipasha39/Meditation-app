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
    song.addEventListener('timeupdate',function (){
        test();
    });
    const test = ()=>{
        let currentTime =song.currentTime;
        //let elapsed = fakeDuration - currentTime;
        let seconds=Math.floor(parseInt(currentTime) % 60);
        let minutes =Math.floor(parseInt(currentTime) / 60);
        timeDisplay.innerText = `${minutes}:${seconds}`;
        if (currentTime >= fakeDuration){
           currentTime = 0;
          song.pause();
          play.src = "./assets/play.svg";
        };

    }
    
}
app();