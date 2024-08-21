export const ADD = (item: any) => {
  console.log("adicionou");
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

// Remove item
export const REMOVE = (id: number) => {
  return {
    type: "REMOVE_TO_CART",
    payload: id,
  };
};