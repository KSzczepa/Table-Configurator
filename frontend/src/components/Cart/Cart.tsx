import Modal from "../UI/Modal";
import {Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from "../../store/cart";
import { useNavigate } from "react-router-dom";


const Cart = () => {

    const navigate = useNavigate();
    
    function navigateHandler() {
        navigate('/');
    };

    const dispatch = useDispatch();

    // interface CartState {
    //     cart: { isCartVisible: boolean }
    // }

    // const cartSelector = (state: CartState) => state.cart;

    // const isCartVisible = useSelector(cartSelector).isCartVisible;

    const onCloseCart = () => {
        dispatch(cartActions.onCloseCart());
        navigateHandler();
    }


    const CartContent = <Fragment>
        <p>This is cart!</p>
    </Fragment>

    return <Modal onClose={onCloseCart}>
        {CartContent}
    </Modal>
}

export default Cart;