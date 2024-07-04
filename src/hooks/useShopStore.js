import { useDispatch, useSelector } from "react-redux";
import { onSetActiveProduct } from "../store/products/shopSlice";

export const useShopStore = () => {

    const dispatch = useDispatch();
    const {activeProduct} = useSelector((state) => state.shop)
    const SetActiveProduct = (product) => {
        dispatch(onSetActiveProduct(product))
        localStorage.setItem('activeProduct', JSON.stringify(product));
        console.log(product);
    }

    return{
        activeProduct,
        SetActiveProduct
    }
}