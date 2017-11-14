import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';

import Snowboarding from '../../img/snowboarding_1.jpg';
import Climbing from '../../img/climbing_1.jpg';
import Traveling from '../../img/traveling_1.jpg';

class Interests extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container interests">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title">Other Interests</h1>
              <Row>
                <Col md={4}>
                  <Thumbnail src={Climbing} alt="" className="interest-image">
                    <p>Elected as President of the University of Sussex Mountaineering Club (2014-2015). <br /><br/>

                    I am currently a member of the British Columbia Mountaineering Club.
                    </p>
                  </Thumbnail>
                </Col>
                <Col md={4}>
                  <Thumbnail src={Snowboarding} alt="" className="interest-image">
                    <p>
                    Alongside my passions in Snowboarding, Rock Climbing and Mountain Biking, I’m qualified in Wilderness First Aid, Rock Rescue and am taking an avalanche rescue course (AST-1).
                    </p>
                  </Thumbnail>
                </Col>
                <Col md={4}>
                  <Thumbnail src={Traveling} alt="" className="interest-image">
                    <p>Having spent many years abroad, I am a keen traveller and always like to explore new countries and environments. <br /> <br /> I have been to 19 countries so far and plan to experience more in the future.</p>                  </Thumbnail>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Interests;
