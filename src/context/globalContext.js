import { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";

const initialState = {
  products: [],
  productsFilter: [],
  productName: "Nombre inicial",
  price: 0,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU",
  productEdit: {},
  carrito: [],
  totalPagar: 0,
  totalItems: 0,
  toastInfo: ""
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeProductName = (productName) => {
    dispatch({ type: "CHANGE_NAME", payload: { productName } });
  };

  const changeToastInfo = (message) => {
    console.log("REDUCER TOAST", message);
    dispatch({ type: "CHANGE_TOAST_INFO", payload: { message } });
  }

  const changeImage = (image) => {
    dispatch({ type: "CHANGE_IMAGE", payload: { image } });
  };

  const changePrice = (price) => {
    dispatch({ type: "CHANGE_PRICE", payload: { price } });
  };

  const setProductEdit = (product) => {
    changeProductName(product.name);
    changeImage(product.image);
    changePrice(product.price);
    dispatch({ type: "SET_PRODUCT_EDIT", payload: { product } });
  };

  const addProductToCarrito = (product) => {
    dispatch({ type: "ADD_PRODUCT_TO_CARRITO", payload: { product } });
  };

  const updateQuantityProductInCarrito = (productId, operacion) => {
    dispatch({ type: "UPDATE_QUANTITY_PRODUCT_IN_CARRITO", payload: { productId, operacion } });
  };

  const deleteProductToCarrito = (productId) => {
    dispatch({ type: "DELETE_PRODUCT_TO_CARRITO", payload: { productId } });
  };

  const updateProductList = (match) => {
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: { match }});
  }

  const loadProducts = (productList) => {
    dispatch({ type: "LOAD_PRODUCTS", payload: { productList }});
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        changePrice,
        changeProductName,
        changeImage,
        setProductEdit,
        addProductToCarrito,
        deleteProductToCarrito,
        updateQuantityProductInCarrito,
        updateProductList,
        loadProducts,
        changeToastInfo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
