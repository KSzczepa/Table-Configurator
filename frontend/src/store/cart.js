import {createSlice} from '@reduxjs/toolkit';


const initialCartState = {products: [], isEmpty: true, totalItems: 0, totalPrice: 0, isCartVisible: false};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addProductToCart(state, action) {
            state.totalPrice += action.payload.price * action.payload.quantity;
            state.totalItems += action.payload.quantity;

            if (!state.isEmpty) {
                const finded = state.products.findIndex(val => val.variant === action.payload.variant);
                if (finded !== -1) {
                    state.products[finded].quantity += action.payload.quantity;
                    return;
                }
            }
            
            
            state.products.push(action.payload);
            state.isEmpty = false;
            

        },
        increaseProdQuantity(state, action) {
            console.log(action.payload);
        },
        sendProductToDB(state, action) {
            // state.counter = state.counter + action.payload;
        },
        onClickCart(state) {
            state.isCartVisible = true;
        },
        onCloseCart(state) {
            state.isCartVisible = false;
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;