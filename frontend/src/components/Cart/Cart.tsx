import Modal from "../UI/Modal";
import {Fragment} from 'react'

const Cart = () => {

    const onCloseCart = () => {
        //to może być jakaś zewnętrzna fcn z propsów
    }

    const CartContent = <Fragment>
        <p>This is cart!</p>
    </Fragment>

    return <Modal onClose={onCloseCart}>
        {CartContent}
    </Modal>
}

export default Cart;