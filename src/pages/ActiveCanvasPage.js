import React, { useState, useContext, useEffect } from "react";
import HeaderBar from "../components/ActiveCanvasHeader";
import BrushColorModal from "../components/BrushColorModal";
import BrushSizeModal from "../components/BrushSizeModal";
import ImportCanvasModal from "../components/ImportCanvasModal";
import ExportCanvasModal from "../components/ExportCanvasModal";
import ShareCanvasModal from "../components/ShareCanvasModal";
import ToolBar from "../components/ToolBar";
import ChatWindow from "../components/ChatWindow";
import Brush from "../components/Brush";
import Canvas from "../components/Canvas";
import "../styles.scss";
import { SocketContext } from "../context/socket";
import { UserContext } from "../context/user";
import { useParams } from "react-router-dom";

const ActiveCanvasPage = () => {
  let params = useParams();

  const canvasId = params.id;
  const socket = useContext(SocketContext);

  const { user, setUser } = useContext(UserContext);

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
  };
  const selectColor = (color) => {
    setBrushColor(color);
    console.log(color);
  };

  const brush = () => {
    return <Brush size={brushSize} color={brushColor} />;
  };

  /* -------- Chat window functions -------- */

  const handleSendMsg = (msg) => {
    let info = { canvasId: canvasId, username: user, color: brushColor };
    socket.emit("chat message", info, msg);
    document.getElementById("chat-input").value = "";
  };

  const colorText = (color, text) => {
    return `<span style='color: ${color}'>${text}</span>`;
  };

  useEffect(() => {
    socket.on("new message", (user, msg) => {
      console.log(`${user.username} sent: ${msg}`);
      let item = document.createElement("li");
      item.innerHTML = `${colorText(user.color, user.username)}: ${msg}`;
      document.getElementById("chat-messages").appendChild(item);
    });
  }, [socket]);

  return (
    <div className="activeCanvas">
      <div className="headerBar">
        <HeaderBar
          title={canvasId}
          setShowImportCanvasModal={setShowImportCanvasModal}
          setShowExportCanvasModal={setShowExportCanvasModal}
          setShowShareCanvasModal={setShowShareCanvasModal}
        />
      </div>

      <div className="mainBody">
        <div className="toolbar">
          <ToolBar
            brush={brush}
            setShowBrushSizeModal={setShowBrushSizeModal}
            setShowBrushColorModal={setShowBrushColorModal}
          />
        </div>

        <div className="canvas">
          <Canvas color={brushColor} thickness={brushSize} canvasId={canvasId} />
        </div>

        <ChatWindow handleSendMsg={handleSendMsg} />
      </div>

      <ImportCanvasModal
        showImportCanvasModal={showImportCanvasModal}
        setShowImportCanvasModal={setShowImportCanvasModal}
      />
      <ExportCanvasModal
        showExportCanvasModal={showExportCanvasModal}
        setShowExportCanvasModal={setShowExportCanvasModal}
      />
      <ShareCanvasModal showShareCanvasModal={showShareCanvasModal} setShowShareCanvasModal={setShowShareCanvasModal} />
      <BrushSizeModal
        showBrushSizeModal={showBrushSizeModal}
        setShowBrushSizeModal={setShowBrushSizeModal}
        selectBrushSize={selectBrushSize}
      />
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
