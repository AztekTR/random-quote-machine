import React from "react"
import TwitterLogo from "../img/twitter.png"
import InstagramLogo from "../img/instagram.png"
import OpenWindow from "../Services/OpenWindow"

class SocialButtons extends React.Component {
  state = {
    serviceWindow: new OpenWindow(),
  }

  constructor(props) {
    super(props)
    this.createNewTweet = this.createNewTweet.bind(this)
    this.createNewInstagram = this.createNewInstagram.bind(this)
  }

  createNewTweet(event) {
    event.preventDefault()
    this.state.serviceWindow.createTweet(this.props.text, this.props.author)
  }

  createNewInstagram(event) {
    event.preventDefault()
    this.state.serviceWindow.createInstagram()
  }

  render() {
    return (
      <div className="wrapper__social-buttons">
        <a href="twitter.com">
          <button
            className="wrapper__social-button"
            onClick={this.createNewTweet}
          >
            <img
              className="wrapper__social-image"
              src={TwitterLogo}
              alt="twit"
            ></img>
          </button>
        </a>
        <a href="instagram.com">
          <button
            className="wrapper__social-button"
            onClick={this.createNewInstagram}
          >
            <img
              className="wrapper__social-image"
              src={InstagramLogo}
              alt="insta"
            ></img>
            {this.state.anal}
          </button>
        </a>
      </div>
    )
  }
}

export default SocialButtons
