import Modal from "../UI/Modal";
import {Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from "../../store/cart";
import { useNavigate } from "react-router-dom";

import classes from './Cart.module.css';

import Card from "../UI/Card";

const Cart = () => {

    const navigate = useNavigate();
    
    function navigateHandler() {
        navigate('/');
    };

    const dispatch = useDispatch();
    
    interface CartState {
        cart: { products: { quantity: number, variant: string, price: number, code: string }[], isEmpty: boolean, totalItems: number, totalPrice: number, isCartVisible: boolean }
    }

    const cartSelector = (state: CartState) => state.cart;

    const isCartVisible = useSelector(cartSelector).isCartVisible;
    const totalItems = useSelector(cartSelector).totalItems;
    const totalPrice = useSelector(cartSelector).totalPrice;
    const products = useSelector(cartSelector).products;

    const onCloseCart = () => {
        dispatch(cartActions.onCloseCart());
        navigateHandler();
    }


    const CartContent = <div className = {classes.cartContent}>
        <div className={classes.header}><h2>Your products</h2><h4>{totalItems} items</h4></div>
        {products.map(item =>             
            <Card>   
                <div>       
                    <span>Amazing wooden table</span><br/>
                    <span>Color: {item.variant}</span><br/>
                </div>  
                <div>
                    <button>-</button><span> {item.quantity} </span><button>+</button><br />
                    <span>{item.price} PLN</span>
                </div>
            </Card>
        )}
        <h3>Total: {totalPrice} PLN</h3>
        
    </div>

    return <Modal onClose={onCloseCart}>
        {CartContent}
    </Modal>
}

export default Cart;