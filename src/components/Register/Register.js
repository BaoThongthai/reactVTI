// Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './VideoBackgroundRegister.css';

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
        throw new Error('Đăng ký thất bại');
      }

      // Đăng ký thành công, về thẳng login
      navigate('/reactVTI');

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
    <div className="background_video">
        <video autoPlay loop muted>       
		<source src={require('../video/Background-loginvsregiter.mp4')} type="video/mp4" />
      </video>
	  
	  <div className="login_container">
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 style={{ marginTop: '70px' }} >Đăng Ký Tài Khoản</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form>
            <Form.Group controlId="formBasicFullName">
              <Form.Label style={{ color: 'white' }} >Full Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="nhập tên"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ color: 'white' }} >Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: 'white' }} >Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
			<br />
            <Button variant="primary" onClick={handleRegister} disabled={isRegistering}>
              {isRegistering ? 'Registering...' : 'Register'}
            </Button>

            <p style={{ color: 'white' }}>
              Bạn đã có tài khoản ? <Link to="/reactVTI">Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
</div>
</div>	
  );
};

export default Register;
