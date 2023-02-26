
import {useSelector, useDispatch} from 'react-redux';
import { productActions } from '../../store/scene';


const Button:React.FC<{id: string, className: string, title: string}> = (props) => {

    interface ProductState {
        product: {texture: string, itemsCounter: number}
    }
    
    const productSelector = (state: ProductState) => state.product;

    const dispatch = useDispatch();
    const texture = useSelector(productSelector).texture;

    const changeTextureHandler = () => {
        dispatch(productActions.changeTexture(props.id));
    };

    return <button onClick={changeTextureHandler} id={props.id} className={props.className} title={props.title}/>
}

export default Button;