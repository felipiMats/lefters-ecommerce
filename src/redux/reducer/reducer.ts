import { ProductDTO } from "../../dtos/ProductDTO";

interface CartState {
  carts: ProductDTO[];
}

interface CartAction {
  type: string;
  payload: any;
}

const INIT_STATE: CartState = {
  carts: []
};

export const cartReducer = (state = INIT_STATE, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state, carts: [...state.carts, action.payload]
      };
    case "REMOVE_TO_CART":
      const data = state.carts.filter(
        (item) => 
          item.id !== action.payload.id || 
          item.selectedColor !== action.payload.selectedColor || 
          item.selectedSize !== action.payload.selectedSize
      );
      return {
        ...state,
        carts: data
      };
    case "DELETE_CART":
      return {
        carts: []
      }
    default:
      return state;
  }
};