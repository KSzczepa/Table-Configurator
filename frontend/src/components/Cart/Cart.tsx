import Modal from "../UI/Modal";
import {Fragment, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from "../../store/cart";
import { useNavigate } from "react-router-dom";
import Cart2dModel from "./2dModel/Cart2dModel";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import classes from './Cart.module.css';
import Card from "../UI/Card";
import { Button, IconButton } from "@mui/material";
import OrderForm from "../OrderForm/OrderForm";

const Cart = () => {


    const navigate = useNavigate();
    
    function navigateHandler(path: string) {
        navigate(path);
    };

    const dispatch = useDispatch();
    
    interface CartState {
        cart: { products: { quantity: number, variant: string, price: number, code: string }[], isEmpty: boolean, totalItems: number, totalPrice: number, isCartVisible: boolean, isOrderFormVisible: boolean }
    }

    const cartSelector = (state: CartState) => state.cart;

    const totalItems = useSelector(cartSelector).totalItems;
    const totalPrice = useSelector(cartSelector).totalPrice;
    const products = useSelector(cartSelector).products;
    const isOrderFormVisible = useSelector(cartSelector).isOrderFormVisible;

    const onCloseCart = () => {
        dispatch(cartActions.onCloseCart());
        dispatch(cartActions.onSubmitForm());
        navigateHandler('/');
    }

    const increaseProdQuantity = (event: any) => {
        dispatch(cartActions.increaseProdQuantity(event.target.id));
    }

    const decreaseProdQuantity = (event: any) => {
        dispatch(cartActions.decreaseProdQuantity(event.target.id));
    }

    const onClickOrderHandler = () => {
        dispatch(cartActions.onClickOrder());
        navigateHandler('/order');
    }

    const productsInCart = (products.map(item =>             
        <Card key={item.code}>   
            <div className={classes.picture}>
                <Cart2dModel variant={item.variant}/>
            </div>
            <div className={classes.description}>       
                <span>Amazing wooden table</span><br/>
                <span>Color: {item.variant}</span><br/>
            </div>  
            <div className={classes.value}>
                <div className={classes.quantity}>
                    <IconButton onClick={decreaseProdQuantity} id={item.variant}><RemoveIcon id={item.variant}/></IconButton>
                    <span> {item.quantity} </span>
                    <IconButton onClick={increaseProdQuantity} id={item.variant}><AddIcon id={item.variant}/></IconButton>
                </div>
                <div className={classes.price}><span>{item.price} PLN</span></div>
            </div>
        </Card>
    ));


    const CartContent = <div className = {classes.cartContent}>
        <div className={classes.header}><h2>Your products</h2><h4>{totalItems} items</h4></div>
        {totalItems > 0 ? productsInCart : <div className = {classes.emptyMsg}>Your shopping cart is empty!</div>}
        {totalItems > 0 ? <div className={classes.summary}><h3>Total: {totalPrice} PLN</h3><Button variant="contained" onClick={onClickOrderHandler}>Order</Button></div> : ''}        
    </div>

    return <Modal onClose={onCloseCart}>
        {!isOrderFormVisible ? CartContent : <OrderForm />}
    </Modal>
}

export default Cart;