import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const RegisterBranch = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate inputs as needed
    if (!fullName || !phone || !email) {
      setError('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    try {
      const response = await fetch('https://6580d5603dfdd1b11c422502.mockapi.io/Branch/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, phone, email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful registration here
        setSuccess(true);
        setFullName('');
        setPhone('');
        setEmail('');
        setError(null);
      } else {
        // Handle errors from the server
        setError(data.message || 'Đăng ký không thành công. Vui lòng thử lại.');
      }
    } catch (error) {
      setError('Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau.');
      console.error('There was an error!', error);
    }
  };

  return (
    <Container className="registration-form" style = {{color:'white'}}>
      <h2>Đăng ký nhượng quyền</h2>
      <p>Gửi địa chỉ thông tin của bạn để được tư vấn !</p>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Đăng ký thành công!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Họ & tên</Form.Label>
          <Form.Control
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
<br/>
        <Button type="submit" variant="primary">
          Gửi ngay
        </Button>
		
      </Form>
	  
    </Container>
  );
};

export default RegisterBranch;
