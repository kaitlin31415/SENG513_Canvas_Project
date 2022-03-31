//import React, { useState } from "react";
import {
    BrushSize,
    Eraser,
    FreeHand,
    AddStickyNote,
    ChangeBrushColour,} from "./ToolButton";
import "../styles.scss";


const ToolBar = () => {
    return (
        <div className="text-center">
            <BrushSize />
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
    );
};

export default ToolBar;