import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer
} from "./reducer/userReducer";

import {
  productListReducer,
  productDetailReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  newProductReducer,
  productReducer,
  productReviewCreateReducer,
} from "./reducer/productListReducer";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,

  productList: productListReducer,
  productDetails: productDetailReducer,
  productDelete: productDeleteReducer,
  newProduct: newProductReducer,
  product: productReducer,
  productReviewCreate: productReviewCreateReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
});


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage, 
    loading: false,
  },
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
