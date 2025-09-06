import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

function Login({ switchPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", {
        email,
        password,
      });

      // Save JWT token in localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");
      console.log("Token:", res.data.token);

      // Optionally redirect to another page
      // window.location.href = "/dashboard";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="auth-card-simple">
        <h2 className="text-center mb-4 text-white">Welcome to V Cart</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input-simple"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="auth-input-simple"
            />
          </Form.Group>

          <Button type="submit" className="auth-btn-simple w-100">
            Submit
          </Button>
        </Form>

        {error && <p className="mt-3 text-center text-danger">{error}</p>}

        <p className="mt-3 text-center text-white">
          Don’t have an account?{" "}
          <span className="auth-link-simple" onClick={switchPage}>
            Sign Up
          </span>
        </p>
      </div>
    </Container>
  );
}

export default Login;
