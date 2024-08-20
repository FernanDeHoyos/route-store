import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        cart: [],
        categories: ['Camisetas', 'Accesorios', 'Calzado', 'Jeans'], // List of category names

        activeCategory: null,
        activeProduct: null,
        isLoadingProducts: true,
    },
    reducers: {
        onSetActiveProduct: (state, { payload }) => {
            state.activeProduct = payload;
        },

        onSetActiveCategory: (state, { payload }) => {
            state.activeCategory = payload; 
          },

        onLoadCategory: (state, { payload }) => {
            state.activeCategory = payload;
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
    onLoadProducts,
    onAddToCart,
    onRemoveFromCart,
    onClearCart,
    onLogoutShop,
    onLoadCategory,
    onSetActiveCategory
} = shopSlice.actions;
