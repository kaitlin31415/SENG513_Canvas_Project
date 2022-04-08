import React from "react";
import Button from "react-bootstrap/Button";
import "../styles.scss";
//Import button images
import size from "../images/size.svg";
import eraser from "../images/eraser.svg";
import pen from "../images/pen.svg";

const BrushSize = (props) => {
  return (
    <Button variant="primary" onClick={() => props.setShowBrushSizeModal(true)}>
      <img src={size} style={{ width: "50px" }} alt="Brush Size" />
    </Button>
  );
};

class Eraser extends React.Component {
  render() {
    return (
      <Button variant="primary" type="submit">
        <img src={eraser} style={{ width: "50px" }} alt="Eraser" />
      </Button>
    );
  }
}

class FreeHand extends React.Component {
  render() {
    return (
      <Button variant="primary" type="submit">
        <img src={pen} style={{ width: "50px" }} alt="Pen" />
      </Button>
    );
  }
}

const ChangeBrushColour = (props) => {
  const Brush = props.brush;
  return (
    <div onClick={() => props.setShowBrushColorModal(true)} >
      <Brush />
    </div>
  );
};

export { BrushSize, Eraser, FreeHand, ChangeBrushColour };
