import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

import meImage from '../../img/me.png';
import cv from '../../img/cv.pdf';



class Header extends Component {
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
    <div className="jumbotron header">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Connor Swain</h1>
            <h3>Lead Software Engineer</h3>
            <p>Proactive and highly motivated Django, Python and React developer, both technically capable and business aware, looking to deliver results in an international commercial environment.</p>
            <p className="full-cv"> <a href={cv} download={"CONNOR SWAIN CV.pdf"}><Glyphicon glyph="download-alt" /> Download full CV</a></p>

          </div>
          <div className="col-md-4">
            <img className="img-responsive img-circle" src={ meImage } alt="" />
          </div>
        </div>
      </div>
      <div className="header-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>
                <span className="fa fa-envelope"><span className="email" onClick={this.clickHandler}>{this.state.copied ? "Copied to clipboard!":"connor@connorswain.co.uk"}</span></span>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span className="fa fa-phone"><span>778 680 7523</span></span>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span className="fa fa-globe"><span>Vancouver, BC</span></span>
              </p>
            </div>
            <div className="col-md-1">
              <p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/connor-swain-55435090"><span className="fa fa-linkedin"/><span /></a>
              </p>
            </div>
            <div className="col-md-1">
              <p>
                <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/entangly/"><span className="fa fa-github"/></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }

}


export default Header;
