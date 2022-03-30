//import React, { useState } from "react";
import {
    BrushSize,
    Eraser,
    FreeHand,
    AddStickyNote,
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

                <AddStickyNote />
                <p>Add Sticky Note</p>

                <ChangeBrushColour />
                <p>Change Brush Colour</p>
            </div>
        </div>


    );
};

export default ToolBar;