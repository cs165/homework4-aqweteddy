// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    
    this.menuScreen = new MenuScreen()
    this.musicScreen = new MusicScreen()

    this._eventPlayMusic = this._eventPlayMusic.bind(this)
    document.addEventListener('eventPlayMusic', this._eventPlayMusic)
  }

  _eventPlayMusic(ev){
    this.menuScreen.hide()
    // console.log(ev.detail.musicUrl, ev.detail.gif)
    this.musicScreen.playMusic(ev.detail.musicUrl, ev.detail.gif)
  }
  // TODO(you): Add methods as necessary.
}
