//import React, { useState } from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Logout,} from "./HeaderButton";
import "../styles.scss";


const HeaderBar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Nav className="m-auto"><h1> Your Canvases</h1></Nav>
            <Nav style={{marginRight: "20px"}}> <Logout /> </Nav> 
        </Navbar>
    );
};

export default HeaderBar;