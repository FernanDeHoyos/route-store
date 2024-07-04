import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        cart: [],
        activeProduct: null,
        isLoadingProducts: true,
    },
    reducers: {
        onSetActiveProduct: (state, { payload }) => {
            state.activeProduct = payload;
        },
        onAddNewProduct: (state, { payload }) => {
            state.products.push(payload);
            state.activeProduct = null;
        },
        onUpdateProduct: (state, { payload }) => {
            state.products = state.products.map(product => {
                if (product.id === payload.id) {
                    return payload;
                }
                return product;
            });
        },
        onDeleteProduct: (state) => {
            if (state.activeProduct) {
                state.products = state.products.filter(product => product.id !== state.activeProduct.id);
                state.activeProduct = null;
            }
        },
        onLoadProducts: (state, { payload }) => {
            state.isLoadingProducts = false;
            payload.forEach(product => {
                const exist = state.products.some(dbProduct => dbProduct.id === product.id);
                if (!exist) {
                    state.products.push(product);
                }
            });
        },
        onAddToCart: (state, { payload }) => {
            state.cart.push(payload);
        },
        onRemoveFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(cartItem => cartItem.id !== payload.id);
        },
        onClearCart: (state) => {
            state.cart = [];
        },
        onLogoutShop: (state) => {
            state.isLoadingProducts = true;
            state.products = [];
            state.cart = [];
            state.activeProduct = null;
        }
    }
});

export const { 
    onSetActiveProduct,
    onAddNewProduct,
    onUpdateProduct,
    onDeleteProduct,
    onLoadProducts,
    onAddToCart,
    onRemoveFromCart,
    onClearCart,
    onLogoutShop 
} = shopSlice.actions;
