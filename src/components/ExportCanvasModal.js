import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import jsonFile from "../images/jsonFile.svg"
import pngFile from "../images/pngFile.svg"
//import Image from "react-bootstrap/Image";
import {Row, Col, Container, Image} from "react-bootstrap";


const ExportCanvasModal = (props) => {
    const handleClose = () => props.setShowExportCanvasModal(false);

    return (
        <div>
            <Modal show={props.showExportCanvasModal} backdrop="static" onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>Export Canvas</Modal.Title>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Image className='file' src={pngFile} fluid />
                                <br/>
                                Export as PNG
                            </Col>

                            <Col>
                                <Image className='file' src={jsonFile} fluid />
                                <br/>
                                Export as JSON
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ExportCanvasModal;