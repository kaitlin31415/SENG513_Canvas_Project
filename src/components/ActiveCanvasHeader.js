//import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Home, Export, Share } from "./HeaderButton";
import "../styles.scss";

const HeaderBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav style={{ marginLeft: "1.6vw" }}>
        {" "}
        <Home />{" "}
      </Nav>

      <Container className='active-canvas-header'>
        <Nav className="m-auto">
          <h1> Title of Canvas </h1>
        </Nav>
      </Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginRight: "1.6vw" }} />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"> </Nav>
        <Nav style={{ marginLeft: "5px", marginRight: "5px" }}> </Nav> {/*Padding between buttons*/}
        <Nav style={{ marginLeft: "5px", marginRight: "5px" }}>
          <Export setShowExportCanvasModal={props.setShowExportCanvasModal} />
        </Nav>
        <Nav style={{ marginLeft: "5px", marginRight: "5px" }}> </Nav> {/*Padding between buttons*/}
        <Nav style={{ marginLeft: "5px", marginRight: "5px" }}>
          <Share setShowShareCanvasModal={props.setShowShareCanvasModal} />
        </Nav>
        <Nav style={{ marginLeft: "5px", marginRight: "1vw" }}> </Nav> {/*Padding between buttons*/}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderBar;
