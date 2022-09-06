const wrapper = document.querySelector('.wrapper'),
  musicImg = wrapper.querySelector('img'),
  musicName = wrapper.querySelector('.name'),
  musicArtist = wrapper.querySelector('.artist'),
  playPauseBtn = wrapper.querySelector('.play-pause'),
  prevBtn = wrapper.querySelector('#prev'),
  nextBtn = wrapper.querySelector('#next'),
  mainAudio = wrapper.querySelector('#main-audio'),
  progressArea = wrapper.querySelector('.progress-area'),
  progressBar = progressArea.querySelector('.progress-bar')

let musicIndex = Math.floor(Math.random() * allMusic.lenght + 1)
isMusicPaused = true

let contMusic = 0;

window.addEventListener('load', () => {
  loadMusic(musicIndex)
})

function loadMusic(indexNumb) {
  musicName.inneText = allMusic[indexNumb - 1].name
  musicArtist.inneText = allMusic[indexNumb - 1].artist
  musicImg.src = `assets/image${allMusic[indexNumb - 1].src}.jpg`
  /* mainAudio.src = `assets/songs${allMusic[indexNumb - 1].src}.mp3`*/
}
function playMusic() {
  contMusic = 1;

  //     wrapper.classList.add('paused')
      musicImg.classList.add('rotate')
  // playPauseBtn.innerHTML 


  /* wrapper.classList.add('paused')
   musicImg.classList.add('rotate')
   playPauseBtn.innerHTML */
  return contMusic();
}

function playMusic1() {
  wrapper.classList.add('paused')
  musicImg.classList.add('rotate')
  playPauseBtn.innerHTML
}

function pauseMusic() {
  contMusic = 0;
 // musicImg.classList.reload();
  window.location.reload();
 // wrapper.classList.remove('paused')
 // musicImg.classList.remove('rotate')
  // playPauseBtn.innerHTML = `<i class="fi fi-sr-play"></i>`
  // mainAudio.pause()

  return contMusic();
}

function fContMusic() {
  if (contMusic == 1) {
    pauseMusic();
  }
  if (contMusic == 0) {

    playMusic();
  }

}


