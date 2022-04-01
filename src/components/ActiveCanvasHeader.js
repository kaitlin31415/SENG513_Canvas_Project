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
                <h1> Canvas Title </h1>
            </div>
            <div className="headerColumn">
                <div className="alignRight">
                    <Import /> {" "}
                    <Export /> {" "}
                    <Share />
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;