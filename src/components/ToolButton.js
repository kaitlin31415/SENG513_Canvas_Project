import React from "react";
import Button from "react-bootstrap/Button";
import "../styles.scss";
//Import button images
import size from "../images/size.svg";
import eraser from "../images/eraser.svg";
import pen from "../images/pen.svg";

const BrushSize = (props) => {
  return (
    <Button className='toolbar-button' variant="primary" onClick={() => props.setShowBrushSizeModal(true)}>
      <img className='toolbar-img' src={size} alt="Brush Size" />
    </Button>
  );
};

const Eraser = (props) => {
  return (
    <Button className='toolbar-button' variant="primary" onClick={() => props.selectColor("#ffffff")}>
      <img className='toolbar-img' src={eraser} alt="Eraser" />
    </Button>
  )
}

const FreeHand = (props) => {
  return (
    <Button className='toolbar-button' variant="primary" onClick={() => props.selectColor("#000000")}>
      <img className='toolbar-img' src={pen} alt="Pen" />
    </Button>
  )
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
