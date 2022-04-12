import React, { useState, useContext, useEffect } from "react";
import HeaderBar from "../components/ActiveCanvasHeader";
import BrushColorModal from "../components/BrushColorModal";
import BrushSizeModal from "../components/BrushSizeModal";
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

    const [showExportCanvasModal, setShowExportCanvasModal] = useState(false);
    const [showShareCanvasModal, setShowShareCanvasModal] = useState(false);
    const [showBrushSizeModal, setShowBrushSizeModal] = useState(false);
    const [showBrushColorModal, setShowBrushColorModal] = useState(false);

    const [showChat, setShowChat] = useState(false);

    const [brushSize, setBrushSize] = useState(10);
    const [brushColor, setBrushColor] = useState("#000000");

    //Used for Active Canvas Header User Icons
    const [users, setUsers] = useState([]);


    const [canvasData, setCanvasData] = useState("");
    const [canvasDownloaded, setCanvasDownloaded] = useState(false);

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

        //For Active Canvas header bar user icons
        socket.on("updateActiveUserList", (u) => {
            //console.log(u);
            setUsers(u);
        });

    }, [socket]);



    return (
        <div className="activeCanvas">
            <div className="headerBar">
                <HeaderBar
                    title={canvasId}
                    userList={users}
                    color={brushColor}
                    setShowExportCanvasModal={setShowExportCanvasModal}
                    setShowShareCanvasModal={setShowShareCanvasModal}
                />
            </div>

            <div className="mainBody">
                <div className="toolbar">
                    <ToolBar
                        brush={brush}
                        selectColor={selectColor}
                        setShowBrushSizeModal={setShowBrushSizeModal}
                        setShowBrushColorModal={setShowBrushColorModal}
                    />
                </div>

                <Canvas color={brushColor} thickness={brushSize} canvasId={canvasId} setCanvasData={setCanvasData} canvasDownloaded={canvasDownloaded} setCanvasDownloaded={setCanvasDownloaded}
                />

                <div className='sidebar'>
                    <button className='sidebar-button' onClick={() => setShowChat(!showChat)}>
                        <span>Open/Close Chat</span>
                    </button>
                </div>

                <ChatWindow handleSendMsg={handleSendMsg} setShowChat={showChat} />
            </div>

            <ExportCanvasModal
                showExportCanvasModal={showExportCanvasModal}
                setShowExportCanvasModal={setShowExportCanvasModal}
                canvasData={canvasData}
                setCanvasDownloaded={setCanvasDownloaded}
            />
            <ShareCanvasModal
                title={canvasId}
                showShareCanvasModal={showShareCanvasModal}
                setShowShareCanvasModal={setShowShareCanvasModal}
            />
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
