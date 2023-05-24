import {createSlice} from '@reduxjs/toolkit';


const initialCartState = {products: [], isEmpty: true, totalItems: 0, totalPrice: 0, isCartVisible: false, isOrderFormVisible: false};

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
            if (!state.isEmpty) {
                const finded = state.products.findIndex(val => val.variant === action.payload);
                if (finded !== -1) {
                    state.products[finded].quantity += 1;
                    state.totalItems +=1;
                    state.totalPrice += state.products[finded].price;
                }
            }
        },
        decreaseProdQuantity(state, action) {
            if (!state.isEmpty) {
                const finded = state.products.findIndex(val => val.variant === action.payload);
                if (finded !== -1) {
                    state.totalItems -= 1;
                    state.totalPrice -= state.products[finded].price;

                    if (state.products[finded].quantity >= 2) {
                        state.products[finded].quantity -= 1;                        
                    }
                    else {
                        if (finded === 0)
                            state.products.shift();
                        state.products.splice(finded, finded);
                        if (state.totalItems === 0)  {
                            state.products.pop();
                            state.isEmpty = true;
                        }
                    }
                }
            }
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
        onClickOrder(state) {
            state.isOrderFormVisible = true;
        },
        onSubmitForm(state) {
            state.isOrderFormVisible = false;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;