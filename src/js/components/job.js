import React, { Component } from 'react';
import { Collapse, Well } from 'react-bootstrap';


class Job extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      open: this.props.open,
    })
  }

  render() {
    return (
      <div>
        <h3 onClick={() => this.setState({ open: !this.state.open })}>
          {this.state.open ? '-':'+'} {this.props.title}
        </h3>
        <Collapse in={this.state.open}>
          <div>
            <Well className="long-desc">
              {this.props.description}
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Job;
