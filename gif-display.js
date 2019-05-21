// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(gif) {
    this.gif = gif
    this.container = document.querySelector('.gifField')
    this.imgIdx = 0
    this.imgs = new Array()
    this.orderList = this._RandomshuffleList(this.imgs.length)
    this.changeImage()
  }
  async changeImage() {
    if(this.imgs.length == 0){
      await this._fetchGif(this.gif)
    }
    let tmp = this.imgs[this.imgIdx++]
    for(let image of this.container.querySelectorAll('.image')){
      if(image.classList.contains('foreground'))
        image.style.backgroundImage = `url('${tmp}')`
      image.classList.toggle('foreground')
    }
  }

  _RandomshuffleList(size) {
    let ans = new Array()

    for(let i=0; i<size; ++i) {
      while(1){
        let rdm = Math.floor( Math.random() * 10000) % size
        if(ans.indexOf(rdm) == -1) {
          ans.push(rdm)
          break
        }
      }
    }
    return ans
  }

  async _fetchGif(gif) {
    const url = new URL('https://api.giphy.com/v1/gifs/search')
    url.search = new URLSearchParams({
      q: gif,
      limit: 25,
      rating: 'g',
      api_key: '6G9cMqqdAtg8AzzBNJQ4XcEb15XaM5jf',
    })

    await fetch(url)
      .then(Response => Response.json())
      .then(json => { this.imgs = json.data.map(val => val.images.downsized.url) })
  }
  
  // TODO(you): Add methods as necessary.
}
