import React, { useRef, useEffect, useContext } from "react";
import { SocketContext } from "../context/socket";

const Board = (props) => {
  const canvasRef = useRef(null);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit("openCanvas", { canvasId: props.canvasId });
  }, []);

  useEffect(() => {
    props.setCanvasDownloaded(false);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const color = props.color;
    const thickness = props.thickness;

    let drawing = false;
    const current = {};

    // Draw line and emit canvas to socket
    const drawLine = (x0, y0, x1, y1, emit) => {
      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.strokeStyle = color;
      context.shadowColor = color;
      context.lineWidth = thickness;
      context.stroke();
      context.closePath();

      if (!emit) {
        return;
      }

      const canvasData = canvas.toDataURL();
      socket.emit("drawing", {
        canvasId: props.canvasId,
        canvasData: canvasData,
      });
      props.setCanvasData(canvasData);
    };

    // Receive canvas from socket
    socket.on("update canvas", (data) => {
      let imageData = new Image();
      imageData.src = data;
      imageData.onload = function () {
        context.drawImage(imageData, 0, 0);
      };

      const canvasData = canvas.toDataURL();
      props.setCanvasData(canvasData);
    });

    socket.on("Render Canvas", (data) => {
      let imageData = new Image();
      imageData.src = data;
      imageData.onload = function () {
        context.drawImage(imageData, 0, 0);
      };

      const canvasData = canvas.toDataURL();
      props.setCanvasData(canvasData);
    });

    // Mouse movements

    const onMouseDown = (e) => {
      drawing = true;
      current.x = e.offsetX || e.touches[0].offsetX;
      current.y = e.offsetY || e.touches[0].offsetY;
    };

    const onMouseMove = (e) => {
      if (!drawing) {
        return;
      }
      drawLine(current.x, current.y, e.offsetX || e.touches[0].offsetX, e.offsetY || e.touches[0].offsetY, false);
      current.x = e.offsetX || e.touches[0].offsetX;
      current.y = e.offsetY || e.touches[0].offsetY;
    };

    const onMouseUp = (e) => {
      if (!drawing) {
        return;
      }
      drawing = false;
      drawLine(current.x, current.y, e.offsetX || e.touches[0].offsetX, e.offsetY || e.touches[0].offsetY, true);
    };

    // Throttle calls to socket

    const throttle = (callback, delay) => {
      let previousCall = new Date().getTime();
      return function () {
        const time = new Date().getTime();

        if (time - previousCall >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    };

    // Add event listeners

    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mouseout", onMouseUp, false);
    canvas.addEventListener("mousemove", onMouseMove, false);

    // Touch support for mobile devices
    canvas.addEventListener("touchstart", onMouseDown, false);
    canvas.addEventListener("touchend", onMouseUp, false);
    canvas.addEventListener("touchcancel", onMouseUp, false);
    canvas.addEventListener("touchmove", onMouseMove, false);

    return () => {
      // Remove event listeners
      canvas.removeEventListener("mousedown", onMouseDown, false);
      canvas.removeEventListener("mouseup", onMouseUp, false);
      canvas.removeEventListener("mouseout", onMouseUp, false);
      canvas.removeEventListener("mousemove", onMouseMove, false);

      // Touch support for mobile devices
      canvas.removeEventListener("touchstart", onMouseDown, false);
      canvas.removeEventListener("touchend", onMouseUp, false);
      canvas.removeEventListener("touchcancel", onMouseUp, false);
      canvas.removeEventListener("touchmove", onMouseMove, false);
    };
  }, [props.color, props.thickness]);

  return (
    <div className="canvas-display">
      <canvas className="canvas-content" width="1280" height="720" ref={canvasRef} />
    </div>
  );
};

export default Board;
