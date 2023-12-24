// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await fetch(`https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/users?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      if (!response.ok) {
        // Handle API error
        throw new Error('Đăng nhập thất bại');
      }

      const userData = await response.json();

      if (!userData || !userData.length) {
        // If no data or email doesn't exist
        throw new Error('Đăng nhập thất bại');
      }

      // Validate email and password from API data
      const userMatch = userData.find(user => user.email === email && user.password === password);

      if (!userMatch) {
        // If email and password don't match
        throw new Error('Đăng nhập thất bại');
      }

      // Đăng nhập thành công thì chuyển trang
      navigate('/productList');

    } catch (error) {
      // Handle errors
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
			
			            {/* Thêm liên kết đến trang đăng ký */}
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;