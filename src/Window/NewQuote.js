import React from "react"

class NewQuote extends React.Component {
  render() {
    return (
      <button
        className="wrapper__new-quote"
        onClick={this.props.createNewQuote}
      >
        New quote
      </button>
    )
  }
}

export default NewQuote
