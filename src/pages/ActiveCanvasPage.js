import React from "react";
import ImportCanvasModal from "../components/ImportCanvasModal";
import ToolBar from "../components/ToolBar";
import "../styles.scss";


const ActiveCanvasPage = () => {

    return (
        <div className='activecanvas'>
            <div className="toolbar">
                <ToolBar />
            </div>
            <ImportCanvasModal />
        </div>

    );
};

export default ActiveCanvasPage;