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


  let musicIndex = Math.floor((Math.random() * allMusic.lenght) + 1);