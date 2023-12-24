import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';


const NavbarComponent = () => {
  return (
 
    <Navbar bg="white" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src="https://s.net.vn/EUvP"
          alt="Logo"
          style={{ marginLeft: '20px',width: '50px', height: '50px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={Link}
            to="/HomePage"
            className="navbar-link"
          >
            Trang chủ
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/ProductList"
            className="navbar-link"
          >
            Sản phẩm
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/news"
            className="navbar-link"
          >
            Tin tức
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/ShopList"
            className="navbar-link"
          >
            Danh sách Cửa hàng
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
	
  );
};

export default NavbarComponent;
