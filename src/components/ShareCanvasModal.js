import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const ShareCanvasModal = (props) => {
    const handleClose = () => props.setShowShareCanvasModal(false);

    return (
        <div>
            <Modal show={props.showShareCanvasModal} backdrop="static" onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>Share Your Canvas</Modal.Title>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control className='mb-3' type='text' placeholder='Enter Username...' />
                        </Form.Group>
                        <Button type='submit' > Share </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ShareCanvasModal;