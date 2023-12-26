import axios from 'axios';

export const fetchShopsRequest = () => ({
  type: 'FETCH_SHOPS_REQUEST',
});

export const fetchShopsSuccess = (shops) => ({
  type: 'FETCH_SHOPS_SUCCESS',
  payload: shops,
});

export const fetchShopsFailure = () => ({
  type: 'FETCH_SHOPS_FAILURE',
});

export const fetchShops = () => {
  return (dispatch) => {
    dispatch(fetchShopsRequest());
    axios.get('https://6580d5603dfdd1b11c422502.mockapi.io/shop')
      .then(response => {
        dispatch(fetchShopsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchShopsFailure());
      });
  };
};


//add shop
const apiUrl = 'https://6580d5603dfdd1b11c422502.mockapi.io/shop';

export const addShop = (shopData) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, shopData);
    dispatch({ type: 'ADD_SHOP_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_SHOP_FAILURE', payload: error.message });
  }
};



//delete
export const deleteShop = (shopId) => {
  return async (dispatch) => {
    try {
     await axios.delete(`https://6580d5603dfdd1b11c422502.mockapi.io/shop/${shopId}`);  
      dispatch({
        type: 'DELETE_SHOP',
        payload: shopId,
      });
    } catch (error) {
      console.error('Error deleting shop:', error);
    }
  };
};
