//import React, { useState } from "react";
import {Home, Import, Export, Share} from "./HeaderButton";
import "../styles.scss";


const HeaderBar = (props) => {
    return (
        <div className="headerRow">
            <div className="headerColumn">
                <div className="alignLeft"> <Home /> </div>
            </div>
            <div className="headerColumn">
                <h1>{props.title}</h1>
            </div>
            <div className="headerColumn">
                <div className="alignRight">
                    <Import setShowImportCanvasModal={props.setShowImportCanvasModal} /> {" "}
                    <Export setShowExportCanvasModal={props.setShowExportCanvasModal} /> {" "}
                    <Share setShowShareCanvasModal={props.setShowShareCanvasModal} />
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;