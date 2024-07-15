import { useDispatch, useSelector } from "react-redux";
import { onAddToCart, onRemoveFromCart, onSetActiveProduct } from "../store/products/shopSlice";
import { collection, deleteDoc, doc, setDoc, getDoc, addDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

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

    /* const onSaveShoping = async(info) => {
        const docRef = doc(FirebaseDB, `productos/XlQ8lUi1GVanJDr7lAU8/compras/mmu3JS3TaQFlYFfDX4sL`);
    
        try {
            await setDoc(docRef, info, {merge:true})
        } catch (e) {
            console.error("Error al obtener el documento: ", e);
        }
    } */

   

    const onSaveShopping = async (productDetail ) => {
        const productoId = "XlQ8lUi1GVanJDr7lAU8"; // ID del producto existente
    
        const addressInfo = productDetail[0]
    
        const productDetails = productDetail[1]
    
        try {
            // Referencia al documento del producto
            const productDocRef = doc(FirebaseDB, `productos/${productoId}`);
    
            // Crear una nueva compra en la subcolección 'compras' con ID generado automáticamente
            const comprasCollectionRef = collection(productDocRef, "compras");
            await addDoc(comprasCollectionRef, {
                addressInfo: addressInfo,
                productDetails: productDetails
            });
    
            console.log("Compra guardada con éxito!");
        } catch (e) {
            console.error("Error al guardar la compra: ", e);
        }
    };


    return{
        //variables
        activeProduct,
        cart,
        
        //funtions
        SetActiveProduct,
        SetAddCart,
        SetRemoveFromCart,
        onSaveShopping
    }
}