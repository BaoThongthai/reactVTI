//trang này dùng để cố định header, 
// 25/12/2023 khiên trang không cần phải render lại mỗi lần load mà header luôn có ở tất cả các trang
import React from 'react';
import NavbarComponent from './NavbarComponent';
import { Outlet } from 'react-router-dom';


const MenuHeader = () => (
  <>
    <NavbarComponent />
     <Outlet /> {/* Nơi các component con sẽ được render */}
  </>
);

export default MenuHeader;
