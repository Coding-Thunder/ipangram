import cartTypes from "./cart.types";

const INITIAL_STATE = {
  data: [],
  modal: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
