import React from "react";
import HeaderBar from "../components/ActiveCanvasHeader";
import ToolBar from "../components/ToolBar";
import "../styles.scss";


const ActiveCanvasPage = () => {
    
    return (
        <div>
            <div className="headerBar">
                <HeaderBar />
            </div>

            <div className="toolBar">
                <ToolBar />
            </div>
        </div>
    );
};

export default ActiveCanvasPage;