// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor() {
    this._eventSwitch = this._eventSwitch.bind(this)
    this.btn = document.querySelector('.btn-play')
    this.state = true // play
    // TODO(you): Implement the constructor and add fields as necessary.
    
    this.btn.addEventListener('click', this._eventSwitch)
    // console.log(123)
  }

  _eventSwitch(ev){
    if(this.state == true) {
      this.state = false
      this.btn.src = 'images/play.png'
    } else { 
      this.state = true
      this.btn.src = 'images/pause.png'
    }
    document.dispatchEvent(new CustomEvent('eventSwitchMusic', {'detail': {
        'toState': this.state
      }
    }))
  }
  // TODO(you): Add methods as necessary.
}
