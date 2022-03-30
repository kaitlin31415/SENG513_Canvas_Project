import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ChromePicker } from "react-color";
import { Col, Container, Row } from "react-bootstrap";

const BrushColorModal = (props) => {
  const handleClose = () => props.setShowBrushColorModal(false);
  const [tempColor, setTempColor] = useState(props.brushColor);

  return (
    <div>
      <Modal show={props.showBrushColorModal} backdrop="static" onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Choose Brush Color</Modal.Title>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <ChromePicker
            color={tempColor}
            onChangeComplete={(c) => {
              setTempColor(c.hex);
            }}
            className="colorpicker"
          />
          <br />
          <Button variant="primary" onClick={() => props.selectColor(tempColor)}>
            Select
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BrushColorModal;
