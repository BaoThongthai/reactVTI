import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShops, addShop, deleteShop } from '../../actions/shopActions';
import { ListGroup, Form, Button } from 'react-bootstrap';
import './ShopListStyle.css';

const ShopList = () => {
  const dispatch = useDispatch();
  const { shops, loading } = useSelector((state) => state.shop);
  const [newShop, setNewShop] = useState({ name: '', address: '' });
  const [showForm, setShowForm] = useState(true); // Change the initial state to true

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

  const handleDeleteShop = (shopId) => {
    dispatch(deleteShop(shopId));
  };

  return (
    <div style={{ marginTop: '73px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="background-image-container">
      <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: '50px', marginTop: '20px' }}>
        Danh sách cửa hàng
      </h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListGroup style={{ paddingTop: '10px', opacity: 0.9 }}>
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

      {showForm && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', marginBottom: '10px', width: '50%' }}>
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
            <Form.Group style={{ marginTop: '10px', marginBottom: '10px' }}>
              <Form.Control
                type="text"
                placeholder="Địa chỉ cửa hàng"
                name="address"
                value={newShop.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="success" onClick={handleAddShop} style={{ width: '100%' }}>
              Save
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ShopList;
