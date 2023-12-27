import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editProductName, deleteProduct, addProduct } from '../actions/productActions';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from '../actions/productActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import AddProductForm from './AddProductForm/AddProductForm';
import ProductSearch from './ProductSearch/ProductSearch';
import './VideoBackground.css';
import CarouselComponent from './Carousel/CarouselComponent';
import RegisterBranch from './RegisterBranch/RegisterBranch';


const ProductList = ({ products, fetchProducts, editProductName, deleteProduct, addProduct }) => {
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProductName, setNewProductName] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


// xử lý khi người dùng bấm click
  const handleEditClick = (productId, currentName) => {
    setEditingProductId(productId); // lấy ra id của sp được chọn
    setNewProductName(currentName); // cập nhật trạng thái bằng cách hiện ra tên của sp
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
  <div className="container-fluid" style={{marginTop:'60px',paddingLeft:0,paddingRight:0,paddingBottom:0}}>
  <CarouselComponent />
</div>

<div className="background-video">
      <video autoPlay loop muted>       
		<source src={require('./video/videobackground.mp4')} type="video/mp4" />
      </video>

    <div className="container mt-4 ">	 

                  <h1 className="mb-4" style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', paddingTop: '10px' }}>Danh sách sản phẩm</h1>
      <ProductSearch onSearch={handleSearch} />

                  {filteredProducts.length === 0 && <p style={{ color: 'white', fontWeight: 'bold' }}> * Không tìm thấy sản phẩm phù hợp.</p>}

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

                                <button onClick={() => handleSaveClick(product.id, newProductName)} className="btn btn-success mr-2" style={{ marginRight:'10px' }}>
						  Lưu sản phẩm 
						</button>
						
						<button onClick={handleCancelClick}  className="btn btn-secondary">
						  Hủy bỏ
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


      <div className={`modal ${showAddModal ? 'show' : ''}`}  style={{ display: showAddModal ? 'block' : 'none' }}>
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
	  <hr />
	  <RegisterBranch />
	  <br />
    </div>
</div>
	</>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});



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

