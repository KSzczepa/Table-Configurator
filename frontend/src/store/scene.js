import {createSlice} from '@reduxjs/toolkit';
import Texture from '../assets/Textures';
import { modelScene as scene } from '../assets/Scene';

const DUMMY_VALUES = [
    {
        texture: 'brown',
        prodCode: 'TAB-BR-K5',
        price: 199.99,
    },
    {
        texture: 'grey',
        prodCode: 'TAB-GR-K5',
        price: 210.99,
    },
    {
        texture: 'white',
        prodCode: 'TAB-WH-K5',
        price: 314.99,
    },
    {
        texture: 'orange',
        prodCode: 'TAB-OR-K5',
        price: 269.99,
    },
    {
        texture: 'purple',
        prodCode: 'TAB-PU-K5',
        price: 349.99,
    },
]

const initialProductState = {texture: 'brown', itemsCounter: 1, price: 199.99, code: 'TAB-BR-K5'};

const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        changeTexture(state, action) {
            state.texture = action.payload;
            Texture.LoadTexture(scene, action.payload);
            const finded = DUMMY_VALUES.findIndex(val => val.texture === state.texture);
            state.code = DUMMY_VALUES[finded].prodCode;
            state.price = DUMMY_VALUES[finded].price;
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