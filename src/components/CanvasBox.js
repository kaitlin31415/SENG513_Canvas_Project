import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NewCanvasModal from "./NewCanvasModal";
import { useNavigate } from "react-router-dom";

const CanvasBox = (props) => {
  let navigate = useNavigate();
  const canvasName = props.canvasName;

  function openCanvas() {
      // TODO: Navigate to "/${canvasId}"
  }

  return (
    <div className="canvasbox">
      <Card className="canvasbox mb-2">
        <Card.Body>
          <Card.Title>{canvasName}</Card.Title>
        </Card.Body>
      </Card>
      <NewCanvasModal />
      {/* <Button variant="primary" onClick={openCanvas}>
        Open
      </Button> */}
    </div>
  );
};

export default CanvasBox;
