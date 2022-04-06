import React, { useContext, useEffect, useState } from "react";
import HeaderBar from "../components/AllCanvasHeader";
import AllCanvasesGrid from "../components/AllCanvasesGrid";
import { SocketContext } from "../context/socket";
import { UserContext } from "../context/user";

const AllCanvasesPage = () => {
  const socket = useContext(SocketContext);
  const { user, setUser } = useContext(UserContext);

  const [showNewCanvas, setShowNewCanvas] = useState(false);
  const [canvases, setCanvases] = useState([]);

  useEffect(() => {
    socket.emit("canvasesPerUser", { username: user });

    socket.on("ShowAllCanvases", (canvases) => {
      setCanvases(canvases);
    });
  }, []);

  return (
    <div>
      <div className="headerBar">
        <HeaderBar />
      </div>

      <br></br>

      <AllCanvasesGrid canvases={canvases} />
    </div>
  );
};

export default AllCanvasesPage;
