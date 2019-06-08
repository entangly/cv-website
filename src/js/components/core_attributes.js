import React, { Component } from 'react';

class CoreAttributes extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>With experience leading successful development projects in finance, healthcare and social media, I have the skills to deliver secure, compliant applications in a variety of markets.</p>
            </div>
          </div>
          <div className="row skills">
            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Professional</h3>
                </div>
                <div className="panel-body">
                  <ul>
                    <li>Highly communicative, keeping team memebers and stakeholders up to date with project progress</li>
                    <li>Comfotable working remotely or in a collaborative team environment</li>
                    <li>Familiar with multiple issue tracking and agile sprint planning tools</li>
                    <li>Up-to-date with best practices across the industry</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skills-content">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Web Development</h3>
                  </div>
                  <div className="panel-body">
                    <ul>
                      <li>5 years experience developing complex applications in Python and Django</li>
                      <li>Strong database optimisation and performance skills</li>
                      <li>Thorough documentation and test coverage for every project</li>
                      <li>Comfortable working with Git or other version control systems</li>
                      <li>Familiar with front end technologies such as HTML, SCSS and React.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Business</h3>
                </div>
                <div className="panel-body">
                  <ul>
                    <li>Foresight and prevention of technical debt</li>
                    <li>Bridge between technical and business components of the company</li>
                    <li>Proven ability to lead in house and offshore development teams</li>
                    <li>Accurate project timeline estimations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoreAttributes;
