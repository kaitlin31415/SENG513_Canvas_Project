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
                <p>Brush Size</p>

                <Eraser />
                <p>Eraser</p>
  
                <FreeHand />
                <p>Free Hand</p>

                <ChangeBrushColour brush={props.brush} setShowBrushColorModal={props.setShowBrushColorModal} />
                <p>Change Brush Colour</p>
            </div>
        </div>


    );
};

export default ToolBar;