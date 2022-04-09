//import React, { useState } from "react";
import {
    BrushSize,
    Eraser,
    FreeHand,
    ChangeBrushColour,} from "./ToolButton";
import "../styles.scss";


const ToolBar = (props) => {
    return (
        <div className="ToolButton">
            <div className="text-center">
                <BrushSize setShowBrushSizeModal={props.setShowBrushSizeModal} />
                <p style={{marginLeft: '2px', marginRight: '2px'}}>Brush Size</p>

                <Eraser />
                <p style={{marginLeft: '2px', marginRight: '2px'}}>Eraser</p>
  
                <FreeHand />
                <p style={{marginLeft: '2px', marginRight: '2px'}}>Free Hand</p>

                <ChangeBrushColour brush={props.brush} setShowBrushColorModal={props.setShowBrushColorModal} />
                <p style={{marginLeft: '2px', marginRight: '2px'}}>Brush Color</p>
            </div>
        </div>


    );
};

export default ToolBar;