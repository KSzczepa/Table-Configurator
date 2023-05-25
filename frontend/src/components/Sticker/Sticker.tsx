import classes from './Sticker.module.css';
import '../fontello/css/fontello.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, IconButton } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Sticker = () => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const dispatch = useDispatch();

    interface CartState {
        cart: { products: { quantity: number, variant: string }[], isEmpty: boolean, totalItems: number, isCartVisible: boolean }
    }

    const cartSelector = (state: CartState) => state.cart;

    const totalCartItems = useSelector(cartSelector).totalItems;
    const isCartEmpty = useSelector(cartSelector).isEmpty;


    const btnClasses = `${classes['cartQuantity']} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (isCartEmpty) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [totalCartItems]);

    const onClickCart = () => {
        dispatch(cartActions.onClickCart());
    }


    return (<div className={classes.header}>
        <h1>TableTweak</h1>
        <Link to={`/cart`} onClick={onClickCart}>
            <Button variant="contained" startIcon={<ShoppingCartIcon />} className={classes.cartBtn}>Shop Cart</Button>

        </Link>
        {!isCartEmpty &&
        // <PanoramaFishEyeIcon className={classes.totalItems}>{totalCartItems}</PanoramaFishEyeIcon>
            <div className={classes.totalItems}>
                <p className={classes.p}>{totalCartItems}</p>
            </div>
        }
    </div>);
};

export default Sticker;
