import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './counter';
import sceneReducer from './scene';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        scene: sceneReducer,
    }
});

export default store;
