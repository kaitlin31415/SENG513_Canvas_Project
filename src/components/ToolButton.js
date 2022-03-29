import React from "react";
import Button from "react-bootstrap/Button";
import "../styles.scss";
//Import button images
import size from "../images/size.svg";
import eraser from "../images/eraser.svg";
import pen from "../images/pen.svg";
import stickyNote from "../images/stickyNote.svg";


class BrushSize extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <img src={size} style={{width:'50px'}} alt="Brush Size"/>
            </Button>
        )
    }
}

class Eraser extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <img src={eraser} style={{width:'50px'}} alt="Eraser"/>                
            </Button>
        )
    }
}


class FreeHand extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <img src={pen} style={{width:'50px'}} alt="Pen"/>                
                
            </Button>
        )
    }
}

class AddStickyNote extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                <img src={stickyNote} style={{width:'50px'}} alt="Sticky Note"/>                                
            </Button>
        )
    }
}

class ChangeBrushColour extends React.Component {
    render() {
        return (
            <Button variant="primary" type="submit">
                
            </Button>
        )
    }
}


export {
    BrushSize,
    Eraser,
    FreeHand,
    AddStickyNote,
    ChangeBrushColour,
}
   