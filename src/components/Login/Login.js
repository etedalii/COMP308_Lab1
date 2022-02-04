import React, { useState } from "react";
import auth from "../../auth/auth";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
/*
    Mohammad Etedali 301056465
    COMP 308 - Lab 1
    Date: 2022-02-04
*/
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    auth.onAuthentication();
    auth.saveToken(email);
    props.history.push("/comment");
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" className="mt-2" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}