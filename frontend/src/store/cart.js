import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {products: [], isEmpty: true, totalItems: 0, totalPrice: 0};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addProductToCart(state, action) {

            if (!state.isEmpty) {
                const finded = state.products.findIndex(val => val.variant === action.payload.variant);
                if (finded !== -1) {
                    state.products[finded].quantity += action.payload.quantity;
                    state.totalItems += action.payload.quantity;
                    return;
                }
            }
            
            
            state.products.push(action.payload);
            state.totalItems += action.payload.quantity;
            state.isEmpty = false;
            

        },
        deleteProductFromCart(state) {
            
        },
        sendProductToDB(state, action) {
            // state.counter = state.counter + action.payload;
        },
        setQuantityToDefault(state) {

        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;