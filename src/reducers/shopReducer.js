const initialState = {
  shops: [],
  loading: false,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SHOPS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SHOPS_SUCCESS':
      return { ...state, shops: action.payload, loading: false };
    case 'FETCH_SHOPS_FAILURE':
      return { ...state, loading: false };
    case 'ADD_SHOP_SUCCESS':
      return { ...state, shops: [...state.shops, action.payload] };
    default:
      return state;
  }
};

export default shopReducer;
