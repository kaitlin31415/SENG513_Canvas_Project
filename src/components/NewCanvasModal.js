import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SocketContext } from "../context/socket";
import { UserContext } from "../context/user";

const NewCanvasModal = () => {
  let navigate = useNavigate();
  const socket = useContext(SocketContext);
  const { user, setUser } = useContext(UserContext);

  const [show, setShow] = useState(false);
  const [newCanvasName, setnewCanvasName] = useState("");

  const handleClose = () => setShow(false);

  const handleCreate = (e) => {
    e.preventDefault();

    if (!newCanvasName) {
      alert("Please enter a canvas name.");
      return;
    }

    socket.emit("createCanvas", { canvasId: newCanvasName });
  };

  useEffect(() => {
    socket.on("Successful Canvas Creation", (canvasId) => {
      socket.emit("AddUserToCanvas", { username: user, canvasId: canvasId });
      navigate(`/canvas/${canvasId}`);
    });

    socket.on("Canvas Already Exists", (canvasId) => {
      alert("Canvas already exists");
    });
  }, []);

  return (
    <div className="newCanvas">
      <Button style={{ color: "white" }} onClick={() => setShow(true)}>
        +
      </Button>
      <Modal show={show} backdrop="static" onHide={handleClose} centered>
        <Modal.Header className="modal-header">
          <Modal.Title>New Canvas</Modal.Title>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Enter canvas name here..."
                value={newCanvasName}
                onChange={(e) => setnewCanvasName(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" onClick={handleCreate}>
              Create & Open Canvas
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewCanvasModal;
