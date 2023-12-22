// ProductSearch.js
import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Gọi hàm tìm kiếm và truyền tên sản phẩm cần tìm kiếm
    onSearch(searchTerm);
  };

 return (
    <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Nhập Tên Sản Phẩm"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginRight: '5px' }}
      />
      <button onClick={handleSearchClick} className="btn btn-warning">
        <span>🔍</span>
      </button>
    </div>
  );
};

export default ProductSearch;
