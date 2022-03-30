import React, { useState } from "react";
import BrushColorModal from "../components/BrushColorModal";
import BrushSizeModal from "../components/BrushSizeModal";
import ImportCanvasModal from "../components/ImportCanvasModal";
import ToolBar from "../components/ToolBar";
import "../styles.scss";

const ActiveCanvasPage = () => {
  const [showBrushSizeModal, setShowBrushSizeModal] = useState(false);
  const [showBrushColorModal, setShowBrushColorModal] = useState(false);
  const [brushColor, setBrushColor] = useState("#ffffff");

  const selectColor = (color) => {
    // TODO: Set color of brush
    setBrushColor(color);
  };

  return (
    <div className="activecanvas">
      <div className="toolbar">
        <ToolBar setShowBrushSizeModal={setShowBrushSizeModal} setShowBrushColorModal={setShowBrushColorModal} />
      </div>
      <ImportCanvasModal />
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
