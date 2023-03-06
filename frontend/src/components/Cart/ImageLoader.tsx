import { Scene, WebGLRenderer, PerspectiveCamera, TextureLoader } from 'three';
import Texture from '../../assets/Textures';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const ImageLoader: React.FC<{variant: string}> = (props) => {
    
    // const objectScene = new Scene();

    // //renderer
    // const renderer = new WebGLRenderer();
    // renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    // //camera
    // const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    // // camera.position.set(-0.904 / div, 0.809 / div, 1.100 / div);

    // const loader = new GLTFLoader();
    //         loader.load('./models/wooden_table/wooden_table_02_4k.gltf', function (gltf) {
    //             console.log(gltf.scene);
    //             const content = gltf.scene;
    //             content.scale.set(1, 1, 1);
    //             content.translateY(-0.4);

    //             content.matrixAutoUpdate = true;
    //             content.updateMatrix();
    //             content.name = 'table';
    //             content.receiveShadow = true;

    //             const Texture = new TextureLoader().load( "./models/wooden_table/textures/wooden_table_02_diff_4k.jpg")
                
    //             objectScene.add(gltf.scene);

    //         }, undefined, function (error) {
    //             console.error(error);
    //         });

    // // Texture.LoadTexture(objectScene, props.variant);

    // function animate() {
    //     requestAnimationFrame(animate);


    //     renderer.render(objectScene, camera);
    // };

    // animate();

    
    const imgSrc = './models/images/'+ props.variant +'.jpg';

    return <img src={imgSrc} width={'70px'}></img>
}

export default ImageLoader;