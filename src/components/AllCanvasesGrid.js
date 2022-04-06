import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CanvasBox from "../components/CanvasBox";
import Col from "react-bootstrap/Col";

const AllCanvasesGrid = (props) => {
  return (
    <Container>
      <Row>
        {!props.canvases && props.canvases.map((canvas) => {
          return (
            <Col sm={3} className="mb-3" key={canvas}>
              <CanvasBox canvasName={canvas} newCanvas={false} />
            </Col>
          );
        })}
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName={""} newCanvas={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllCanvasesGrid;
