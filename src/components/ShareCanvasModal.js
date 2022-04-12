import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/socket";
import { Toast, ToastContainer } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const ShareCanvasModal = (props) => {

    const socket = useContext(SocketContext);

    const canvasName = props.title;

    const [username, setAddUsername] = useState("");
    const [showNoUser, setNoUserShow] = useState(false);
    const [showEmptyUser, setEmptyUserShow] = useState(false);
    const [showAddedUser, setAddedUserShow] = useState(false);

    const handleClose = () => {
        props.setShowShareCanvasModal(false);
        setAddUsername('');
    };


    //Need username and canvasID
    const addNewUser = (e) => {
        e.preventDefault();

        if (!username) {
            //alert("Please enter a username.");
            setEmptyUserShow(true);
            return;
        }

        socket.emit("AddUserToCanvas", { username: username, canvasId: canvasName });
    };

    useEffect(() => {
        socket.on("Added Canvas to User", (info) => {
            //alert(info.canvasId + " shared successfully with " + info.username + "!");
            setAddedUserShow(true);
            //handleClose();
            setAddUsername('');
        });

        socket.on("No User", (username) => {
            setNoUserShow(true);
        });
    }, []);

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
                            <Form.Control className='mb-3' type='text' placeholder='Enter Username...' value={username} onChange={(e) => setAddUsername(e.target.value)} />
                        </Form.Group>
                        <Button type='submit' onClick={addNewUser}> Share </Button>
                    </Form>
                
                    <ToastContainer position="top-center">
                        <Toast bg="danger" onClose={() => setEmptyUserShow(false)} show={showEmptyUser} delay={3000} autohide>
                            <Toast.Body>Please enter a username.</Toast.Body>
                        </Toast>
                    </ToastContainer>

                    <ToastContainer position="top-center">
                        <Toast bg="danger" onClose={() => setNoUserShow(false)} show={showNoUser} delay={3000} autohide>
                            <Toast.Body>That username does not exist, try again!</Toast.Body>
                        </Toast>
                    </ToastContainer>

                    <ToastContainer position="top-center">
                        <Toast bg="success" onClose={() => setAddedUserShow(false)} show={showAddedUser} delay={3000} autohide>
                            <Toast.Body>User has been successfully added!</Toast.Body>
                        </Toast>
                    </ToastContainer>
                    {""}
                </Modal.Body>

                
            </Modal>
        </div>
    );
}

export default ShareCanvasModal;