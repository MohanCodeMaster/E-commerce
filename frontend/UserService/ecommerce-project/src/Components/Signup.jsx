import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

function Signup({ switchPage }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        phone,
        email,
        password,
      });

      setSuccess(res.data.message || "Signup successful ✅ Please login.");
      alert("Signup successful 🎉 Now you can login!");

      // Auto switch to Login page after signup
      switchPage();
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="auth-card-simple">
        <h2 className="text-center mb-4 text-white">Welcome to V Cart</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="auth-input-simple"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Phone No."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="auth-input-simple"
            />
          </Form.Group>

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
        {success && <p className="mt-3 text-center text-success">{success}</p>}

        <p className="mt-3 text-center text-white">
          Already have an account?{" "}
          <span className="auth-link-simple" onClick={switchPage}>
            Sign In
          </span>
        </p>
      </div>
    </Container>
  );
}

export default Signup;
