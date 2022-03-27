import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CanvasBox from "../components/CanvasBox";
import Col from "react-bootstrap/Col";

const AllCanvasesGrid = () => {
  // TODO: Fetch all canvases from server

  // TODO: Create function to render columns dynamically

  return (
    <Container>
      <Row>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
        <Col sm={3} className="mb-3">
          <CanvasBox canvasName="Canvas #1" />
        </Col>
      </Row>
    </Container>
  );
};

export default AllCanvasesGrid;
