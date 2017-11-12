import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      copied: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(e) {
    e.preventDefault();
    var textField = document.createElement('textarea')
    textField.innerText = 'connor@connorswain.co.uk'
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy');
    textField.remove()
    this.setState({
      copied: true,
    })
    setTimeout(() => {
      this.setState({
        copied: false,
      })
    }, 2000)

  }
  render() {
    return (
      <div className="footer header-footer" style={{position: "relative"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                <span className="fa fa-envelope"><span className="email" onClick={this.clickHandler}>{this.state.copied ? "Copied to clipboard!":"connor@connorswain.co.uk"}</span></span>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <span className="fa fa-phone"><span>778 680 7523</span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
