import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Container, Image, Row } from "react-bootstrap";
import smallBrush from "../images/smallBrush.svg";
import mediumBrush from "../images/mediumBrush.svg";
import largeBrush from "../images/largeBrush.svg";

const BrushSizeModal = (props) => {
  const handleClose = () => props.setShowBrushSizeModal(false);

  return (
    <div>
      <Modal show={props.showBrushSizeModal} backdrop="static" onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Choose Brush Size</Modal.Title>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image src={smallBrush} fluid />
                <Button onClick={() => props.selectBrushSize(10)}>
                  Small
                </Button>
              </Col>
              <Col>
                <Image src={mediumBrush} fluid />
                <Button onClick={() => props.selectBrushSize(20)}>
                  Medium
                </Button>
              </Col>
              <Col>
                <Image src={largeBrush} fluid />
                <Button onClick={() => props.selectBrushSize(30)}>  
                  Large
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BrushSizeModal;
