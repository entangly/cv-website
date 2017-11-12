import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
import CoreAttributes from './core_attributes';
import EmploymentHistory from './employment_history';
import Projects from './projects';
import Skills from './skills';
import OtherInterests from './interests';

import codeImage from '../../img/code.png';


class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div>
        <div className="top-image">
          <img src= {codeImage} alt=""/>
        </div>

        <Header />

        <div className="content">

          <CoreAttributes />

          <EmploymentHistory />

          <Projects />

          <Skills />

          <OtherInterests />

        </div>

        <Footer />
      </div>
    )
  }
}

export default Home;
