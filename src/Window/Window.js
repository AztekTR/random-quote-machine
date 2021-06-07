import React from "react"
import Quote from "./Quote"
import NewQuote from "./NewQuote"
import SocialButtons from "./SocialButtons"
import QuoteService from "../Services/QuotesService"
import ColorService from "../Services/ColorService"
import AnimationService from "../Services/AnimationService"

class Window extends React.Component {
  state = {
    serviceQuote: new QuoteService(),
    serviceColor: new ColorService(),
    serviceAnimation: new AnimationService(),
    text: "",
    author: "",
  }

  constructor(props) {
    super(props)
    this.createNewQuote = this.createNewQuote.bind(this)
  }

  componentDidMount() {
    this.createNewQuote()
  }

  createNewQuote() {
    this.state.serviceQuote
      .getUsers()
      .then((users) =>
        this.setState({ text: users.company.catchPhrase, author: users.name })
      )
    this.state.serviceColor.setRandomColor()
  }

  render() {
    return (
      <div className="wrapper__window">
        <Quote text={this.state.text} author={this.state.author}/>
        <div className="wrapper__buttons">
          <SocialButtons text={this.state.text} author={this.state.author} />
          <NewQuote createNewQuote={this.createNewQuote} />
        </div>
      </div>
    )
  }
}

export default Window
