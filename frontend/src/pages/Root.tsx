import { Fragment, useEffect, useState } from 'react';
import Sticker from '../components/Sticker/Sticker';
import ItemHandlerBox from '../components/productDetails/ProductSpecsMainComponent/ProductSpecs';
import Options from '../components/texturesUI/TextureSelector';
import Cart from '../components/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';
import MainModel from '../components/3dModel/MainModel';
import { Container, Row, Col } from 'react-bootstrap';

const RootLayout = () => {
    // const navigation = useNavigation();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const dispatch = useDispatch();

    interface CartState {
        cart: { isCartVisible: boolean }
    }

    const cartSelector = (state: CartState) => state.cart;

    const isCartVisible = useSelector(cartSelector).isCartVisible;

    // const onCloseCart = () => {
    //     dispatch(cartActions.onCloseCart());
    // }

    return <Fragment>
        <Sticker />
        <main>
            {isCartVisible && <Cart />}
            <Container fluid>
                <Row style={{ marginTop: '25px' }}>
                    <Col style={{ width: '50%', float: 'left', marginTop: '15px' }}>
                        <Row>
                            <div id="canvaContainer">
                                <MainModel imgSize={{ width: windowWidth, heigth: windowHeight }} />
                            </div>
                        </Row>
                        <Row>
                            <div id="textureOptions">
                                <Options />
                            </div>
                        </Row>
                    </Col>
                    <Col style={{ width: '50%', float: 'left' }}>
                        <div id="itemDescription">
                            <ItemHandlerBox />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    </Fragment>
}

export default RootLayout;