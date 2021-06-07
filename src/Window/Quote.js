import React from "react"

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidUpdate() {
    this.myRef.current.style.transitionDuration = "0s"
    this.myRef.current.style.opacity = 0
    setTimeout(() => {
      this.myRef.current.style.transitionDuration = ".8s"
      this.myRef.current.style.opacity = 1
    }, 200)
  }

  render() {
    return (
      <div className="quote">
        <p className="quote__text" ref={this.myRef}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="quote-left"
            className="quote__quote-brackets"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4
            0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288
            0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 
            192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
            ></path>
          </svg>
          {this.props.text}
        </p>
        <p className="quote__author">-{this.props.author}</p>
      </div>
    )
  }
}

export default Quote
