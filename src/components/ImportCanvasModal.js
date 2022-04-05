import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import jsonFile from "../images/jsonFile.svg"
import Image from "react-bootstrap/Image";

const ImportCanvasModal = (props) => {
    const handleClose = () => props.setShowImportCanvasModal(false);

    return (
        <div>
            <Modal show={props.showImportCanvasModal} backdrop="static" onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>Import Canvas</Modal.Title>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Image className='jsonfile' src={jsonFile} fluid />
                    <br/>
                    Import a JSON File
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ImportCanvasModal;