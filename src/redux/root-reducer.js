import { combineReducers } from "redux";
import productReducer from "./product/products.reducer";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
