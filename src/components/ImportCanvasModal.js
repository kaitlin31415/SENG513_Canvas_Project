import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ImportCanvasModal = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <div>
            <Modal show={show} onHide={handleClose} dialogClassName='importcanvasmodal' centered>
                <Modal.Header closeButton>
                    <Modal.Title>Import Canvas</Modal.Title>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    Import a JSON File
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ImportCanvasModal;