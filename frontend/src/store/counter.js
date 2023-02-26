import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {counter: 1};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            if (state.counter > 1)
            state.counter--;
        },
        setValue(state, action) {
            if (action.payload > 0) 
                state.counter = action.payload;
        },
        // toogleCounter(state) {
        //     state.showCounter = !state.showCounter;
        // }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;