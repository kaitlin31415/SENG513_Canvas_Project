import React from "react";
import Button from "react-bootstrap/Button";

const BounceBack = () => {
  return (
    <div className="bounceback">
      <h2>Sorry!</h2>
      <br />
      <div className="text-center">
        <p>That username is already taken.</p>
        <p>Please choose another one</p>
        <Button href="/signup" size="lg" variant="primary">
          OK
        </Button>
      </div>
    </div>
  );
};

export default BounceBack;
