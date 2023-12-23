// Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setRegistering] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Kiểm tra xem đang trong quá trình đăng ký không
    if (isRegistering) {
      return;
    }

    try {
      // Bắt đầu quá trình đăng ký
      setRegistering(true);

      // Gửi yêu cầu đăng ký đến API
      const response = await fetch('https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!response.ok) {
        // Xử lý lỗi từ API
        throw new Error('Đăng ký thất bại');
      }

      // Đăng ký thành công, có thể chuyển hướng hoặc thực hiện các hành động khác
      navigate('/');

    } catch (error) {
      // Xử lý lỗi
      console.error(error.message);
      setError(error.message);
    } finally {
      // Kết thúc quá trình đăng ký, không phụ thuộc vào kết quả thành công hay thất bại
      setRegistering(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Register</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form>
            <Form.Group controlId="formBasicFullName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

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

            <Button variant="primary" onClick={handleRegister} disabled={isRegistering}>
              {isRegistering ? 'Registering...' : 'Register'}
            </Button>

            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
