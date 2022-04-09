import React, { useContext, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles.scss";
import { SocketContext } from "../context/socket";
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";

const SignUp = () => {
  let navigate = useNavigate();

  const socket = useContext(SocketContext);
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function handleSignUp(event) {
    event.preventDefault();
    const userInfo = {
      username: username,
      password: password,
    };
    socket.emit("checkAndAddUsername", userInfo);
  }

  useEffect(() => {
    socket.on("Successful Creation", (username) => {
      setUser(username);
      navigate("/allcanvases");
    });

    socket.on("User Already Exists", (username) => {
      setShow(true);
    });
  }, [socket]);

  return (
    <div className="signup">
      <div className="text-center">
        <Image className="logo" src="/logo.png" fluid />
      </div>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="signup-form mb-3" controlId="username">
          <Form.Label>Create Username</Form.Label>
          <br />
          <Form.Control rows={3} autoFocus type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="signup-form mb-4" controlId="password">
          <Form.Label>Create Password</Form.Label>
          <br />
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button size="lg" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <br />
      <p>
        Already have an account? Login <a href="/">here.</a>
      </p>
      <ToastContainer position="bottom-center">
        <Toast bg="danger" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>That username already exists.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default SignUp;
