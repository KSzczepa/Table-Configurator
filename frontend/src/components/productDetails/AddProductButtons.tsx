import classes from './AddProductButtons.module.css';

import {useSelector, useDispatch} from 'react-redux';
import { cartActions } from '../../store/cart';
import { productActions } from '../../store/scene';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AddProductButtons: React.FC<{}> = () => {

    interface ProductState {
        product: {texture: string, itemsCounter: number, price: number, code: string}
    }

    const productSelector = (state: ProductState) => state.product;

    
    const dispatch = useDispatch();
    const product = useSelector(productSelector);

    const incrementHandler = () => {
        dispatch(productActions.increment());
    }

    const decrementHandler = () => {
        dispatch(productActions.decrement());
    }

    const addProductToCart = () => {
        const productsToBuy = {
            quantity: product.itemsCounter,
            variant: product.texture,
            price: product.price,
            code: product.code
        }
        dispatch(cartActions.addProductToCart(productsToBuy));
        dispatch(productActions.setValue(1));
    }

    return <div className={classes.buttons}>
        {/* <IconButton className={classes.action} onClick={decrementHandler}><RemoveIcon /></IconButton> */}
        <Button variant="contained" className={classes.action} onClick={decrementHandler}>-</Button>
        <button className={classes.quantity}>{product.itemsCounter}</button>
        <Button variant="contained" className={classes.action} onClick={incrementHandler}>+</Button>
        <Button variant="contained" className={classes.add} onClick={addProductToCart}>ADD PRODUCT</Button>
    </div>
}

export default AddProductButtons;