import React, { useState } from "react";
import BrushSizeModal from "../components/BrushSizeModal";
import ImportCanvasModal from "../components/ImportCanvasModal";
import ToolBar from "../components/ToolBar";
import "../styles.scss";

const ActiveCanvasPage = () => {
  const [showBrushSizeModal, setShowBrushSizeModal] = useState(false);

  return (
    <div className="activecanvas">
      <div className="toolbar">
        <ToolBar setShowBrushSizeModal={setShowBrushSizeModal} />
      </div>
      <ImportCanvasModal />
      <BrushSizeModal showBrushSizeModal={showBrushSizeModal} setShowBrushSizeModal={setShowBrushSizeModal} />
    </div>
  );
};

export default ActiveCanvasPage;
