class OpenWindow {
  _open(url) {
    window.open(url, "_blank")
  }

  createTweet(text, author) {
    const tweet = `https://twitter.com/intent/tweet?hashtags=quotes&text="${text}", ${author}`
    this._open(tweet)
  }

  createInstagram() {
    this._open("https://www.instagram.com/")
  }
}

export default OpenWindow
