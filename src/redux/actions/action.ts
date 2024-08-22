import { ProductDTO } from "../../dtos/ProductDTO";

export const ADD = (item: any) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

// Remove item
export const REMOVE = (product: ProductDTO) => {
  return {
    type: "REMOVE_TO_CART",
    payload: product,
  };
};