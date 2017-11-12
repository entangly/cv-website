import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './home';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper">
          <Switch>
            <Route path='*' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}


export default connect(mapStateToProps, { })(Root);
