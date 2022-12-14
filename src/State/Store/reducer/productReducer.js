export const productsReducer = (state = { products: [] }, action) => {
    if (action.type === "ADD_PRODUCTS") {
      console.log("Reducer is called==>", action);
      return {
        ...state,
        products: action.data,
      };
    }
    if(action.type==="ADD_PET"){
        return{
            ...state,
            mypet:action.data,
        }
    }
    if (action.type === "SET_PRODUCT_NAME") {
      console.log("Reducer is called==>", action);
      return {
        ...state,
        productname: action.data,
      };
    }
    return state;
  };