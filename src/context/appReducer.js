export const getTotalItems = (carrito) => {
    return carrito.reduce((total, product) => total + product.quantity, 0);
}

export const getTotalPagar = (carrito) => {
    return carrito.reduce((total, product) => total + product.precio * product.quantity, 0);
}

export function appReducer(state, action) {
    switch (action.type) {

        case "LOAD_PRODUCTS":
            return {
                ...state, products: action.payload.productList, productsFilter: action.payload.productList 
            }

        case "UPDATE_PRODUCT_LIST":
            if (action.payload.match !== "") {
                return {
                    ...state, productsFilter: state.products.filter(p => p.nombre.toUpperCase().includes(action.payload.match.toUpperCase()))
                }
            }
            else {
                return {
                    ...state, productsFilter: state.products
                }
            }
                
        case "CHANGE_TOAST_INFO":
            return {...state, toastInfo: action.payload.message}

        case "CHANGE_NAME":
            return {...state, productName: action.payload.productName}

        case "CHANGE_IMAGE":
            return {...state, image: action.payload.image}

        case "CHANGE_PRICE":
            return {...state, price: action.payload.price}
        
        case "CHANGE_AUTOR":
            return {...state, autor: action.payload.autor}
        
        case "CHANGE_DESCRIPCION":
            return {...state, descripcion: action.payload.descripcion}
        
        case "SET_PRODUCT_EDIT":
            return {...state, productEdit: action.payload.product}
        
        case "SET_OBRA_VIEW":
            return {...state, obraView: action.payload.obra}

        case "SET_ORDER_DETAILS":
            return {...state, orderDetails: action.payload.orderDetails}

        case "SET_PROPIETARIO_OBRA_VIEW":
            return {...state, propietarioObraView: action.payload.propietario}
        
        case "ADD_PRODUCT_TO_CARRITO":
            if (!state.carrito.find(item => item.idObra === action.payload.product.idObra)) {
                state.carrito.push({
                    ...action.payload.product, quantity: 1
                });
            }
            return { 
                ...state, 
                carrito: [ ...state.carrito ],
                totalPagar: getTotalPagar(state.carrito),
                totalItems: getTotalItems(state.carrito)
            }
        
        case "DELETE_PRODUCT_TO_CARRITO":
            let partialState = state.carrito.filter(item => item.idObra !== action.payload.productId)
            return { 
                ...state,
                carrito: [ ...state.carrito.filter(item => item.idObra !== action.payload.productId) ],
                totalPagar: getTotalPagar(partialState),
                totalItems: getTotalItems(partialState)
            }
        
        case "UPDATE_QUANTITY_PRODUCT_IN_CARRITO":
            if (action.payload.operacion === "incrementar") {
                let partialState = {
                    ...state,
                    carrito: state.carrito.map(item => {
                        if (item.idObra === action.payload.productId) {
                            return {...item, quantity: item.quantity + 1}
                        }
                        else {
                            return item
                        }
                    })
                }
                return { 
                    ...partialState,
                    totalPagar: getTotalPagar(partialState.carrito),
                    totalItems: getTotalItems(partialState.carrito)
                }
            }
            if (action.payload.operacion === "decrementar") {
                let partialState = {
                    ...state,
                    carrito: state.carrito.map(item => {
                        if (item.idObra === action.payload.productId) {
                            return {...item, quantity: item.quantity - 1}
                        }
                        else {
                            return item
                        }
                    })
                }           
                return { 
                    ...partialState,
                    totalPagar: getTotalPagar(partialState.carrito),
                    totalItems: getTotalItems(partialState.carrito)
                }
        
            }
            break

        default:
            return state
    }

}

