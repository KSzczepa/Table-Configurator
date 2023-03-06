import Modal from "../UI/Modal";
import {Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from "../../store/cart";
import { useNavigate } from "react-router-dom";

import classes from './Cart.module.css';

import Card from "../UI/Card";
import ImageLoader from "./ImageLoader";

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

    const totalItems = useSelector(cartSelector).totalItems;
    const totalPrice = useSelector(cartSelector).totalPrice;
    const products = useSelector(cartSelector).products;

    const onCloseCart = () => {
        dispatch(cartActions.onCloseCart());
        navigateHandler();
    }

    const increaseProdQuantity = (event: any) => {
        dispatch(cartActions.increaseProdQuantity(event.target.id));
    }

    const decreaseProdQuantity = (event: any) => {
        dispatch(cartActions.decreaseProdQuantity(event.target.id));
    }

    const productsInCart = (products.map(item =>             
        <Card key={item.code}>   
            <div className={classes.picture}>
                <ImageLoader variant={item.variant}/>
            </div>
            <div className={classes.description}>       
                <span>Amazing wooden table</span><br/>
                <span>Color: {item.variant}</span><br/>
            </div>  
            <div className={classes.value}>
                <div className={classes.quantity}>
                    <button onClick={decreaseProdQuantity} id={item.variant}>-</button>
                    <span> {item.quantity} </span>
                    <button onClick={increaseProdQuantity} id={item.variant}>+</button><br />
                </div>
                <span>{item.price} PLN</span>
            </div>
        </Card>
    ));


    const CartContent = <div className = {classes.cartContent}>
        <div className={classes.header}><h2>Your products</h2><h4>{totalItems} items</h4></div>
        {totalItems > 0 ? productsInCart : <p>Your shopping cart is empty!</p>}
        {totalItems > 0 ? <div className={classes.summary}><h3>Total: {totalPrice} PLN</h3><button>Order</button></div> : ''}        
    </div>

    return <Modal onClose={onCloseCart}>
        {CartContent}
    </Modal>
}

export default Cart;