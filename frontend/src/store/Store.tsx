import {configureStore} from '@reduxjs/toolkit';

import sceneReducer from './scene';
import cartReducer from './cart';

const store = configureStore({
    reducer: {
        product: sceneReducer,
        cart: cartReducer
    }
});

export default store;
