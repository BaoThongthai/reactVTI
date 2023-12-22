// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store1 from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import ShopList from './components/ShopList';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider store={store1}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
            <Route path="/productList" element={<ProductList />} />
			<Route path="/ShopList" element={<ShopList />} />
			<Route path="/HomePage" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}



export default App;
