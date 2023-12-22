import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShops, addShop } from '../actions/shopActions';
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

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div style={{ marginLeft: '10px' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListGroup style={{ marginTop: '10px' }}>
          {shops.map((shop) => (
            <ListGroup.Item key={shop.id}>
              <strong>{shop.name}</strong>
              <p>{shop.address}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      <Button variant="primary" onClick={toggleFormVisibility} style={{ marginTop: '10px' }}>
        {showForm ? 'Close' : ' + Add New Shop '}
      </Button>

      {showForm && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px' }}>
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
            <Form.Group>
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
