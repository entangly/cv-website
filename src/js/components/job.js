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
    var list = undefined
    if (this.props.list) {
      const list_elements = this.props.list.map((element, index) => {return (<li key={index}>{element}</li>)})
      list = (
        <ul>
          {list_elements}
        </ul>
      )
    }

    return (
      <div>
        <h3 onClick={() => this.setState({ open: !this.state.open })}>
          {this.state.open ? '-':'+'} {this.props.title}
        </h3>
        <Collapse in={this.state.open}>
          <div>
            <Well className="long-desc">
              {this.props.description}
              {list}
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Job;
