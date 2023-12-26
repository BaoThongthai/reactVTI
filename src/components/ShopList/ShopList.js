import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShops, addShop, deleteShop  } from '../../actions/shopActions';
import { ListGroup, Form, Button } from 'react-bootstrap';

const ShopList = () => {
  const dispatch = useDispatch();
  const { shops, loading } = useSelector((state) => state.shop);
  const [newShop, setNewShop] = useState({ name: '', address: '' });
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);


  const handleInputChange = (e) => {
    setNewShop({ ...newShop, [e.target.name]: e.target.value });
  };

  const handleAddShop = () => {
    dispatch(addShop(newShop));
    setNewShop({ name: '', address: '' });
  };


//xử lý show phần add shop / ẩn hiện
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };
  
  
   // Gọi action deleteShop với ID của cửa hàng cần xóa
  const handleDeleteShop = (shopId) => {
  dispatch(deleteShop(shopId));
};



  return (
    <div style={{marginTop:'73px'}}>
    <h5 style={{ marginLeft: '50px', textAlign: 'center', fontWeight: 'bold', color: 'red',fontsize:'50px' }}>
      Danh sách cửa hàng
    </h5>
      {loading ? (
        <p>Loading...</p>
      ) : (
			<ListGroup style={{ marginTop: '10px' }}>
			  {shops.map((shop) => (
				<ListGroup.Item key={shop.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
				  <div>
					<strong>{shop.name}</strong>
					<p>{shop.address}</p>
				  </div>
				  <div>
					<Button variant="danger" onClick={() => handleDeleteShop(shop.id)}>
					  Xóa
					</Button>
				  </div>
				</ListGroup.Item>
			  ))}
			</ListGroup>
      )}

      <Button variant="primary" onClick={toggleFormVisibility} style={{ marginTop: '10px' }}>
        {showForm ? 'Close' : ' + Add New Shop '}
      </Button>

      {showForm && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px',marginBottom: '10px' }}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Tên cửa hàng"
                name="name"
                value={newShop.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group style={{ marginTop: '10px',marginBottom: '10px' }}>
              <Form.Control
                type="text"
                placeholder="Địa chỉ cửa hàng"
                name="address"
                value={newShop.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="success" onClick={handleAddShop}>
              Save
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ShopList;
