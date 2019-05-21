// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    
    this.menuScreen = new MenuScreen()
    this.musicScreen = new MusicScreen()

    this._eventPlayMusic = this._eventPlayMusic.bind(this)
    this._eventErrorGifLen = this._eventErrorGifLen.bind(this)
    document.addEventListener('eventPlayMusic', this._eventPlayMusic)
    document.addEventListener('eventErrorGifLen', this._eventErrorGifLen)
  }

  _eventPlayMusic(ev){
    this.menuScreen.hide()
    this.musicScreen.playMusic(ev.detail.musicUrl, ev.detail.gif)
  }

  _eventErrorGifLen(ev) {
    this.menuScreen.show()
    this.musicScreen.stop()
    document.querySelector('#error').classList.remove('inactive')
  }
  // TODO(you): Add methods as necessary.
}
