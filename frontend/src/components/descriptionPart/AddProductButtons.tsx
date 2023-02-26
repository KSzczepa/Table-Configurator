import classes from './AddProductButtons.module.css';

import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../../store/counter';

const AddProductButtons: React.FC<{}> = () => {

    interface CounterState {
        counter: {counter: number}
      }

    const selectIsOn = (state: CounterState) => state.counter;

    
    const dispatch = useDispatch();
    const counter = useSelector(selectIsOn).counter;

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const addProductToCart = () => {

    }

    return <div className={classes.buttons}>
        <button className={classes.action} onClick={decrementHandler}>-</button>
        <button className={classes.quantity}>{counter}</button>
        <button className={classes.action} onClick={incrementHandler}>+</button>
        <button className={classes.add} onClick={addProductToCart}>ADD PRODUCT</button>
    </div>
}

export default AddProductButtons;