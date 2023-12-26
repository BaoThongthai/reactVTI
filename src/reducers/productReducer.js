// productReducer.js
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  
} from '../actions/productActions';

const initialState = {
  products: [],
  loading: false,
  error: null,
  editingProduct: null,
  addingProduct: false,
};



const productReducer = (state = initialState, action) => {
  switch (action.type) {
	  //productList
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload, error: null };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, products: [], error: action.payload };
    //Edit product
    case EDIT_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        editingProduct: null,
        error: null,
      };
    case EDIT_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload, editingProduct: null };
    //DELETE CASE
    case DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.filter((product) => product.id !== action.payload),
        error: null,
      };
      
    case DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };
	//ADD PRODCUT
	case ADD_PRODUCT_REQUEST:
      return { ...state, addingProduct: true, error: null };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addingProduct: false,
        products: [...state.products, action.payload],
        error: null,
      };
    case ADD_PRODUCT_FAILURE:
      return { ...state, addingProduct: false, error: action.payload };

    default:
      return state;
  }
};


export default productReducer;