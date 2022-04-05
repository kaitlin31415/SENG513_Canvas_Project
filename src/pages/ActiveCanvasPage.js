import React, { useState } from "react";
import HeaderBar from "../components/ActiveCanvasHeader";
import BrushColorModal from "../components/BrushColorModal";
import BrushSizeModal from "../components/BrushSizeModal";
import ImportCanvasModal from "../components/ImportCanvasModal";
import ExportCanvasModal from "../components/ExportCanvasModal";
import ShareCanvasModal from "../components/ShareCanvasModal";
import ToolBar from "../components/ToolBar";
import ChatWindow from '../components/ChatWindow'
import Brush from "../components/Brush";
import "../styles.scss";


const ActiveCanvasPage = () => {
    const [showImportCanvasModal, setShowImportCanvasModal] = useState(false);
    const [showExportCanvasModal, setShowExportCanvasModal] = useState(false);
    const [showShareCanvasModal, setShowShareCanvasModal] = useState(false);
    const [showBrushSizeModal, setShowBrushSizeModal] = useState(false);
    const [showBrushColorModal, setShowBrushColorModal] = useState(false);
    const [brushSize, setBrushSize] = useState(10);
    const [brushColor, setBrushColor] = useState("#ffffff");

    const selectBrushSize = (size) => {
        setBrushSize(size);
        setShowBrushSizeModal(false);
        console.log(size);
    }
    const selectColor = (color) => {
        setBrushColor(color);
        console.log(color);
    };

    const brush = () => {
        return (
            <Brush size={brushSize} color={brushColor} />
        )
    }

    return (
        <div className="activeCanvas">
            <div className="headerBar">
                <HeaderBar setShowImportCanvasModal={setShowImportCanvasModal} setShowExportCanvasModal={setShowExportCanvasModal} setShowShareCanvasModal={setShowShareCanvasModal}/>
            </div>

            <div className="mainBody">
                <div className="toolbar">
                    <ToolBar brush={brush} setShowBrushSizeModal={setShowBrushSizeModal} setShowBrushColorModal={setShowBrushColorModal} />
                </div>

                <div className='canvas'>
                    <h1>[DUMMY CANVAS]</h1>
                </div>

                <ChatWindow />
            </div>

            <ImportCanvasModal showImportCanvasModal={showImportCanvasModal} setShowImportCanvasModal={setShowImportCanvasModal} />
            <ExportCanvasModal showExportCanvasModal={showExportCanvasModal} setShowExportCanvasModal={setShowExportCanvasModal} />
            <ShareCanvasModal showShareCanvasModal={showShareCanvasModal} setShowShareCanvasModal={setShowShareCanvasModal} />
            <BrushSizeModal showBrushSizeModal={showBrushSizeModal} setShowBrushSizeModal={setShowBrushSizeModal} selectBrushSize={selectBrushSize} />
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
