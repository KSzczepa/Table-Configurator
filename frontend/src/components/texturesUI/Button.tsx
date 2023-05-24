
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/scene';


const Button: React.FC<{ id: string, className: string, title: string }> = (props) => {

    const dispatch = useDispatch();

    const changeTextureHandler = () => {
        dispatch(productActions.changeTexture(props.id));
    };

    return <button onClick={changeTextureHandler} id={props.id} className={props.className} title={props.title} />
}

export default Button;