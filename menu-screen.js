// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.


const THEME_LIST = ['candy', 'charlie brown', 'computers','dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space']

class MenuScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this._eventClickGo = this._eventClickGo.bind(this)

    this.container = document.querySelector('#menu')
    this.selector = this.container.querySelector('#song-selector')
    this.theme = this.container.querySelector('#query-input')
    this.errMsg = this.container.querySelector('#error')
    
    this.form = this.container.querySelector('form')
    this.form.addEventListener('submit', this._eventClickGo)

    this._fetechMusic()
    this._randomChooseTheme()
  }
  _eventClickGo(ev) {
    ev.preventDefault()

    const tmpGif = this.theme.value.trim()

    document.dispatchEvent(new CustomEvent('eventPlayMusic', {
      'detail': {
        'musicUrl': this.musics[this.selector.selectedIndex].songUrl,
        'gif': tmpGif === '' ? this._randomTheme() : tmpGif
      }
    }))
  }

  _fetechMusic() {
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
      .then(Response => Response.json())
      .then(val => {
        this.musics = Object.keys(val).map(key => val[key])
        this._renderSelectorItem()
      })
  }

  _renderSelectorItem() {
    for (var music of this.musics) {
      const item = document.createElement('option')
      item.textContent = `${music.artist}: ${music.title}`
      this.selector.appendChild(item)
    }
  }

  _randomChooseTheme() {
    const idx = Math.floor(Math.random() * THEME_LIST.length)

    this.theme.value = THEME_LIST[idx]
  }

  hide() {
    this.container.classList.add('inactive')
  }
  // TODO(you): Add methods as necessary.
}
