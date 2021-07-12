const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const appElement =document.querySelector('.app');
    const video =document.querySelector('.video-container video')

    //sounds
    const songs = document.querySelectorAll('.sound-picker button');

    //Time Display
    const timeDisplay = document.querySelector('.time-display')
    const timeSelect = document.querySelectorAll('.time-selector button')

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
    // Create a function that will animate time 
    const test = ()=>{
        let currentTime =song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds=Math.floor(parseInt(elapsed) % 60);
        let minutes =Math.floor(parseInt(elapsed) / 60);
        timeDisplay.innerText = `${minutes}:${seconds}`;
        if (currentTime >= fakeDuration){
           currentTime = 0;
          song.pause();
          play.src = "./assets/play.svg";
        };

    }
    //select sounds
    songs.forEach(sound=>{
        sound.addEventListener('click',function(){
            song.src=this.getAttribute('data-sound');
            appElement.style.backgroundImage="url('https://d39ghehfp8sbx4.cloudfront.net/media/img/1/95ecdee2-6dbb-4614-9c0e-aa88a3489769-1400.jpg?placeid=948&name=Barceloneta%20Beach&lat=41.378372&lng=2.192468')";
            playingSongs(song);
        });
    });  
    //select time
    timeSelect.forEach(option=>{
        option.addEventListener('click',function(){
            fakeDuration=this.getAttribute("data-time")
            timeDisplay.innerText = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
        });
    });
   
}
app();