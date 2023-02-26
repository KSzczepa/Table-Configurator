import {createSlice} from '@reduxjs/toolkit';
import Texture from '../assets/Textures';
import { modelScene as scene } from '../assets/Scene';

const initialProductState = {texture: 'brown', itemsCounter: 1};

const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        changeTexture(state, action) {
            state.texture = action.payload;
            Texture.LoadTexture(scene, action.payload);
        },
        increment(state) {
            state.itemsCounter++;
        },
        decrement(state) {
            if (state.itemsCounter > 1)
            state.itemsCounter--;
        },
        setValue(state, action) {
            if (action.payload > 0) 
                state.itemsCounter = action.payload;
        },
    }
});


export default productSlice.reducer;
export const productActions = productSlice.actions;