import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {quantity: 0, variant: ''};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addProductToCart(state, action) {
            // state.counter++;
        },
        deleteProductFromCart(state) {
            
        },
        sendProductToDB(state, action) {
            // state.counter = state.counter + action.payload;
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;