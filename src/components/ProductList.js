import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editProductName, deleteProduct, addProduct } from '../actions/productActions';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from '../actions/productActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './VideoBackground.css';
import AddProductForm from './AddProductForm';
import ProductSearch from './ProductSearch';
import CarouselComponent from './CarouselComponent';
import NavbarComponent from './NavbarComponent';




const ProductList = ({ products, fetchProducts, editProductName, deleteProduct, addProduct }) => {
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProductName, setNewProductName] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleEditClick = (productId, currentName) => {
    setEditingProductId(productId);
    setNewProductName(currentName);
  };

  const handleSaveClick = (productId, newName) => {
    editProductName(productId, newName);
    setEditingProductId(null);
  };

  const handleCancelClick = () => {
    setEditingProductId(null);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleAddProduct = (newProduct) => {
    addProduct(newProduct);
    setNewProductName('');
    setShowAddModal(false);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <>
  <div className="container-fluid">
  <NavbarComponent />
  <hr/><hr/>
  <CarouselComponent />
</div>

<div className="background-video">
      <video autoPlay loop muted>       
		<source src={require('./videobackground.mp4')} type="video/mp4" />
      </video>

    <div className="container mt-4 ">	 

	   <hr/>
	   <h1 className="mb-4" style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Danh sách sản phẩm</h1>
      <ProductSearch onSearch={handleSearch} />

      {filteredProducts.length === 0 && <p style={{ color: 'red', fontWeight: 'bold' }}> * Không tìm thấy sản phẩm phù hợp.</p>}

      <div className="row row-cols-1 row-cols-md-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col mb-4">
             <div className={`card ${editingProductId === product.id ? 'border-primary' : ''}`} style={{ overflow: 'hidden', position: 'relative' }}>			
				<img
				  src={product.image}
				  alt={product.name}
				  className="card-img-top"
				  style={{
					transition: 'transform 0.3s ease-in-out',
					width: '100%',
					height: 'auto',
				  }}
				  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
				  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
				/>
			  
				<div className="card-body">
					{editingProductId === product.id ? (
					  <div>
					  
						<input type="text" className="form-control mb-2" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
						
						<button onClick={() => handleSaveClick(product.id, newProductName)} className="btn btn-success mr-2">
						  Save
						</button>
						
						<button onClick={handleCancelClick}  className="btn btn-secondary">
						  Cancel
						</button>
				</div>
                ) : (
                  <div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price}</p>
					
						<button onClick={() => handleEditClick(product.id, product.name)} className="btn btn-warning" style={{ float: 'left' }} >
						  <FontAwesomeIcon icon={faPencilAlt}/>
						</button>
						
						<button onClick={() => deleteProduct(product.id)} className="btn btn-danger ml-2" style={{ float: 'right' }}>
						  <FontAwesomeIcon icon={faTrashAlt} />
						</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

		<button onClick={handleAddClick} className="btn btn-primary mb-3" style={{ display: 'flex', alignItems: 'center', marginLeft:'45%' }}>
		  <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
		  Thêm sản phẩm
		</button>

      <div className={`modal ${showAddModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showAddModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm sản phẩm mới</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowAddModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <AddProductForm onAddProduct={handleAddProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
	</>
  );
};
/*s. Trong trường hợp này, state.products.products từ Redux store được chuyển thành props products của component. 
Khi trạng thái thay đổi, component sẽ tự động render lại để hiển thị dữ liệu mới.*/
// MapStateToProps: Chuyển đổi trạng thái trong store thành props của component
const mapStateToProps = (state) => ({
  products: state.products.products,
});


// mapDispatchToProps: Chuyển đổi các action creator thành props của component
/*Giải thích: Nó liên kết các actions với dispatch của Redux store.
 Khi component cần thay đổi trạng thái, nó có thể gọi các hàm được cung cấp thông qua props để dispatch các actions. 
Ví dụ, fetchProducts sẽ gọi action để lấy dữ liệu từ một API và cập nhật store.*/
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => { 
    dispatch(fetchProductsRequest());
    fetch('https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/product')
      .then((response) => response.json())
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error.message)));
  },
  editProductName: (productId, newName) => {
    dispatch(editProductName(productId, newName));
  },
  deleteProduct: (productId) => {
    dispatch(deleteProduct(productId));
  },
  addProduct: (newProduct) => {
    dispatch(addProduct(newProduct));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
/*Mục tiêu: Kết nối component với Redux store.
Giải thích: 
Hàm connect từ thư viện react-redux được sử dụng để kết nối component với Redux store.
 Nó nhận vào hai tham số: 
 mapStateToProps để ánh xạ trạng thái vào props 
 và mapDispatchToProps để ánh xạ actions vào props. 
 Kết quả là component ProductList 
 sẽ có khả năng truy cập vào dữ liệu từ Redux store thông qua props và
 có khả năng gọi các actions để thay đổi trạng thái của store.*/
