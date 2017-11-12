import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }


  render() {
    return (
      <div className="thumbnail">
        <img  onClick={this.open} className={`img-responsive img-circle ${this.props.project.extraClasses}`} src={this.props.project.img} alt="" />
        <div className="caption">
          <h3 onClick={this.open}>{this.props.project.title}</h3>
          <p>{this.props.project.short_desc}</p>
          <p onClick={this.open} className="btn btn-primary" role="button">Learn more</p>
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
         <Modal.Header closeButton>
           <Modal.Title>{this.props.project.title}</Modal.Title>
         </Modal.Header>
         <Modal.Body>

           <p className="long-desc">{this.props.project.long_desc}</p>

           <hr />
           <p className="tech">{this.props.project.tech}</p>
           <div style={{textAlign: "right"}}><Button onClick={this.close}>Close</Button></div>
         </Modal.Body>
       </Modal>

      </div>
    )
  }
}

export default Project;
