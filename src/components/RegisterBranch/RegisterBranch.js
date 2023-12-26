import React, { useState } from 'react';

const RegisterBranch = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate inputs as needed
    if (!fullName || !phone || !email) {
      setError('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    try {
      const response = await fetch('https://6580d5603dfdd1b11c422502.mockapi.io/Branch/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, phone, email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful registration here
        console.log('Registration successful', data);
        // Reset form or navigate to another page
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
   <div className="registration-form" style={{ backgroundColor: 'aqua' }}>
      <h2>Đăng ký nhượng quyền</h2>
      <p>Gửi địa chỉ thông tin của bạn để được tư vấn !</p>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="full-name">Họ & tên</label>
        <input
          type="text"
          id="full-name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label htmlFor="phone">Số điện thoại</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Gửi ngay</button>
      </form>
    </div>
  );
};

export default RegisterBranch;
