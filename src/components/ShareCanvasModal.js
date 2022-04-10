import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/socket";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const ShareCanvasModal = (props) => {
    const socket = useContext(SocketContext);
    
    const canvasName = props.title;
    const [username, setAddUsername] = useState("");

    const handleClose = () => props.setShowShareCanvasModal(false);

    //Need username and canvasID
    const addNewUser = (e) => {
        e.preventDefault();
        
        if (!username) {
            alert("Please enter a username.");
            return;
          }

        socket.emit("AddUserToCanvas", { username: username, canvasId: canvasName});
        alert("Canvas shared successfully!");
        handleClose();
        setAddUsername('');
    };

    return (
        <div>
            <Modal show={props.showShareCanvasModal} backdrop="static" onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>Share Your Canvas</Modal.Title>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                        <Form.Control className='mb-3' type='text' placeholder='Enter Username...' value={username} onChange={(e) => setAddUsername(e.target.value)}/>
                        </Form.Group>
                        <Button type='submit' onClick={addNewUser}> Share </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ShareCanvasModal;