//import React, { useState } from "react";
import {Logout,} from "./HeaderButton";
import "../styles.scss";


const HeaderBar = () => {
    return (
        <div className="headerRow">
            <div className="headerColumn">
                {/* Empty */}
            </div>
            <div className="headerColumn">
                <h1> Your Canvases </h1>
            </div>
            <div className="headerColumn">
                <div className="alignRight"><Logout /></div>
            </div>
        </div>
    );
};

export default HeaderBar;