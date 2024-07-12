import { useDispatch, useSelector } from "react-redux";
import { onAddToCart, onRemoveFromCart, onSetActiveProduct } from "../store/products/shopSlice";

export const useShopStore = () => {

    const dispatch = useDispatch();
    const {activeProduct, cart} = useSelector((state) => state.shop)


    const SetActiveProduct = (product) => {
        dispatch(onSetActiveProduct(product))
        localStorage.setItem('activeProduct', JSON.stringify(product));
    }

    const SetAddCart = (product) => {
        const storedCart = JSON.parse(localStorage.getItem('productsCart')) || [];
        const updatedCart = [...storedCart, product];
        dispatch(onAddToCart(updatedCart))
        localStorage.setItem('productsCart', JSON.stringify(updatedCart));
    }

    const SetRemoveFromCart = (product) => {
        dispatch(onRemoveFromCart(product))
    }

    return{
        //variables
        activeProduct,
        cart,
        
        //funtions
        SetActiveProduct,
        SetAddCart,
        SetRemoveFromCart
    }
}