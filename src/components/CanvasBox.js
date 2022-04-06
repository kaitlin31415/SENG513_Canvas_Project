import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NewCanvasModal from "./NewCanvasModal";
import { useNavigate } from "react-router-dom";

const CanvasBox = (props) => {
  let navigate = useNavigate();
  const canvasName = props.canvasName;
  const newCanvas = props.newCanvas;

  function openCanvas() {
    navigate(`/canvas/${canvasName}`);
  }

  return (
    <div className="canvasbox">
      {newCanvas ? (
        <>
          <Card className="canvasbox mb-2">
            <Card.Body>
              <Card.Title>New Canvas</Card.Title>
            </Card.Body>
          </Card>
          <NewCanvasModal />
        </>
      ) : (
        <>
          <Card className="canvasbox mb-2">
            <Card.Body>
              <Card.Title>{canvasName}</Card.Title>
            </Card.Body>
          </Card>
          <Button variant="primary" onClick={openCanvas}>
            Open
          </Button>
        </>
      )}
    </div>
  );
};

export default CanvasBox;
