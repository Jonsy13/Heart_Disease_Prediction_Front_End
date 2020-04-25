import React from 'react';
import { Modal } from 'react-bootstrap'
import './Modal.css';

class ModalOver extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <Modal
                size="sm"
                show={this.state.show}
                onHide={this.handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"  >
                        Blood Pressure Classifier
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.title}</h4>
                    <p>
                        {this.props.content}
                    </p>
                </Modal.Body>
            </Modal>
        );

    }


}

export default ModalOver;