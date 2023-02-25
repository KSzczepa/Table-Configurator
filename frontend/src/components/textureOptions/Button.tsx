
import {useSelector, useDispatch} from 'react-redux';
import { tableActions } from '../../store/scene';

interface sceneState {
    scene: {scene: THREE.Scene, texture: string}
  }

const selectIsOn = (state: sceneState) => state.scene;



const Button:React.FC<{id: string, className: string, title: string}> = (props) => {

    const dispatch = useDispatch();
    const texture = useSelector(selectIsOn).texture;

    const changeTextureHandler = () => {
        dispatch(tableActions.changeTexture(props.id));
    };

    return <button onClick={changeTextureHandler} id={props.id} className={props.className} title={props.title}/>
}

export default Button;