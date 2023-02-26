import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter';
import sceneReducer from './scene';
import cartReducer from './cart';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        scene: sceneReducer,
        cart: cartReducer
    }
});

export default store;
