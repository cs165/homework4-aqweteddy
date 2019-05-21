// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor() {
    this._eventSwitchMusic = this._eventSwitchMusic.bind(this)

    this.container = document.querySelector('#musicPlayer')
    this.gifField = this.container.querySelector('.gifField')
    this.btnPlayField = this.container.querySelector('.btn-play')
    this.loading = this.container.querySelector('.loading')

    document.addEventListener('eventSwitchMusic', this._eventSwitchMusic)
    // TODO(you): Implement the constructor and add fields as necessary.
  }

  playMusic(url, gif) {

    this.gifField = new GifDisplay(gif)
    this.show()
    this.audio = new AudioPlayer()
    this.audio.setSong(url)
    this.audio.setKickCallback(() => {
      console.log('Kick!')
      // this.gif.changeImage()
    })
    this.audio.play()
    this.btnPlay = new PlayButton()
  }

  _eventSwitchMusic(ev) {
    if(ev.detail.toState == 1) this.audio.play()
    else this.audio.pause()
    this.gifField.changeImage()
  }

  show() {
    this.container.classList.remove('inactive')
  }

  // _loadingOnOff()
  // TODO(you): Add methods as necessary.
}
