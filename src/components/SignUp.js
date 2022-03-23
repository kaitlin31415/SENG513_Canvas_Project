import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles.scss";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    // TODO: Validate username and password
    return true;
  }

  function handleSignUp(event) {
    // TODO: Sign up user
  }

  return (
    <div className="signup">
      <div className="text-center">
        <Image className="logo" src="/logo.png" fluid />
      </div>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Create Username</Form.Label>
          <br />
          <Form.Control rows={3} autoFocus type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Create Password</Form.Label>
          <br />
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button size="lg" variant="primary" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
      <br />
      <p>
        Already have an account? Login <a href="/">here.</a>
      </p>
    </div>
  );
};

export default SignUp;
