interface CartItem {
  id: number;
  title: string;
  // Outras propriedades que seu item do carrinho possa ter
}

interface CartState {
  carts: CartItem[];
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
      const data = state.carts.filter((item) => item.id !== action.payload);
      return {
        ...state,
        carts: data
      };
    default:
      return state;
  }
};