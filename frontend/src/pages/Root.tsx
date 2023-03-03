import { Fragment } from 'react';
// import { Outlet, useNavigation } from 'react-router-dom';
import Sticker from '../components/Sticker/Sticker';
import Model from '../components/Model';
import Box from '../components/Box';
import ItemHandlerBox from '../components/descriptionPart/ItemHandlerBox';
import Options from '../components/textureOptions/Options';
import Cart from '../components/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';

const RootLayout = () => {
    // const navigation = useNavigation();

    const dispatch = useDispatch();

    interface CartState {
        cart: { isCartVisible: boolean }
    }

    const cartSelector = (state: CartState) => state.cart;

    const isCartVisible = useSelector(cartSelector).isCartVisible;

    const onCloseCart = () => {
        dispatch(cartActions.onCloseCart());
    }

    return <Fragment>
        <Sticker />
        <main>
            {isCartVisible && <Cart/>}
            <Box>
				<Model />
			</Box>
			<ItemHandlerBox />
			<Options />
        </main>
    </Fragment>
}

export default RootLayout;