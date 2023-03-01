import classes from './Sticker.module.css';
import '../fontello/css/fontello.css';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Sticker = () => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    interface CartState {
        cart: { products: { quantity: number, variant: string }[], isEmpty: boolean, totalItems: number }
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


    return (<div className={classes.header}>
        <h1>TabConfig</h1>
        <Link to={`/cart`}>
        <div className={`${classes['font-basket']}`}>
            <p>Shop Cart</p>
            <i className="icon-basket" style={{ fontSize: '32px' }} />
            {!isCartEmpty && 
            <div className={btnClasses}>
                <p className={classes.p}>{totalCartItems}</p>
            </div>}
            {/* <i className="icon-basket" style={{ fontSize: '20px' , marginRight: '10px'}} /> */}
        </div>
        </Link>
    </div>);
};

export default Sticker;
