import React, { Component } from 'react';

import skills from '../../img/wordcloud.svg';

class Skills extends Component {
  render() {
    return (
      <div className="jumbotron hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title">Technical Skills</h1>
              <img src={skills} alt="" className="img-responsive"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Skills;
