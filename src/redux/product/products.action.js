import productTypes from "./products.types";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/products");
    if (response.data) {
      dispatch({
        type: productTypes.GET_ALL_PRODUCTS,
        payload: response.data,
      });
    }
  } catch (error) {}
};

export const toogleModal = () => ({
  type: productTypes.OPEN_MODAL,
});
