import React, { useState } from "react";
import HeaderBar from "../components/ActiveCanvasHeader";
import BrushColorModal from "../components/BrushColorModal";
import BrushSizeModal from "../components/BrushSizeModal";
import ImportCanvasModal from "../components/ImportCanvasModal";
import ToolBar from "../components/ToolBar";
import ChatWindow from '../components/ChatWindow'
import "../styles.scss";

const ActiveCanvasPage = () => {
    const [showImportCanvasModal, setShowImportCanvasModal] = useState(false);
    const [showBrushSizeModal, setShowBrushSizeModal] = useState(false);
    const [showBrushColorModal, setShowBrushColorModal] = useState(false);
    const [brushColor, setBrushColor] = useState("#ffffff");

    const selectColor = (color) => {
    // TODO: Set color of brush
    setBrushColor(color);
    console.log(color);
    };

    return (
        <div className="activeCanvas">
            <div className="headerBar">
                <HeaderBar setShowImportCanvasModal={setShowImportCanvasModal} />
            </div>

            <div className="mainBody">
                <div className="toolbar">
                    <ToolBar setShowBrushSizeModal={setShowBrushSizeModal} setShowBrushColorModal={setShowBrushColorModal} />
                </div>

                <div className='canvas'>
                    <h1>[DUMMY CANVAS]</h1>
                </div>
                
                <ChatWindow />
            </div>

            <ImportCanvasModal showImportCanvasModal={showImportCanvasModal} setShowImportCanvasModal={setShowImportCanvasModal} />
            <BrushSizeModal showBrushSizeModal={showBrushSizeModal} setShowBrushSizeModal={setShowBrushSizeModal} />
            <BrushColorModal
            showBrushColorModal={showBrushColorModal}
            setShowBrushColorModal={setShowBrushColorModal}
            brushColor={brushColor}
            selectColor={selectColor}
            />
        </div>
    );
};

export default ActiveCanvasPage;
