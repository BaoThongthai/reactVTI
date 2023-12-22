import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';


const NavbarComponent = () => {
  return (
 
    <Navbar bg="white" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/407261129_670959721834772_389033561569337500_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHvLB3PXzgVbdT0gzZJw8B7q_2CG5bbq96r_YIbltur3pEPo63DlKG3PJm_ZpwhTtaonuvUHy7BxumK3243QGwz&_nc_ohc=w8FdpvtVIt4AX9KXsIv&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBvnNBmkhRO9Tzkk45mTgVXNrk4C-rde8LejCsYlo3Rhg&oe=6586BC8C"
          alt="Logo"
          style={{ width: '50px', height: '50px' }}
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
