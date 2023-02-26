import {createSlice} from '@reduxjs/toolkit';
import Texture from '../assets/Textures';
import { modelScene as scene } from '../assets/Scene';

const initialSceneState = {texture: 'brown'};

const sceneSlice = createSlice({
    name: 'scene',
    initialState: initialSceneState,
    reducers: {
        changeTexture(state, action) {
            state.texture = action.payload;
            Texture.LoadTexture(scene, action.payload);
        },
    }
});

// export const counterActions = counterSlice.actions;
export default sceneSlice.reducer;
export const tableActions = sceneSlice.actions;