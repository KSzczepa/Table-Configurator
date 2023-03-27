import { Scene, WebGLRenderer, PerspectiveCamera, TextureLoader } from 'three';
import Texture from '../../assets/Textures';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const ImageLoader: React.FC<{variant: string}> = (props) => {

    
    const imgSrc = './models/images/'+ props.variant +'.jpg';

    return <img src={imgSrc} width={'70px'}></img>
}

export default ImageLoader;