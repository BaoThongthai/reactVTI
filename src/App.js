// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import ShopList from './components/ShopList/ShopList';
import HomePage from './components/HomePage/HomePage';
import MenuHeader from './components/Navbar/MenuHeader';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
		
          <Routes>
            <Route path="/reactVTI" element={<Login />} />
			<Route path="/register" element={<Register />} />
            <Route element={<MenuHeader />}>
              <Route path="/productList" element={<ProductList />} />
              <Route path="/ShopList" element={<ShopList />} />
              <Route path="/HomePage" element={<HomePage />} />
            </Route>
          </Routes>
		
        </div>
      </Router>
    </Provider>
  );
}



export default App;
