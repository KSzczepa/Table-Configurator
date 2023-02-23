// import { Scene, PerspectiveCamera } from 'three';
import * as THREE from 'three';
import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const Model:React.FC<{onChange: () => void}> = (props) => {

    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff');

    //camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const Model = () => {

    const [isModelLoaded, setIsModelLoaded] = useState(false);

    const setIsModelLoadedHandler = (state: boolean) => {
        setIsModelLoaded(state);
    }

    useEffect(() => {
        if (isModelLoaded === false) {
        //loader
        const loader = new GLTFLoader();
        loader.load('./models/wooden_table/wooden_table_02_4k.gltf', function (gltf) {

            const content = gltf.scene;
            content.scale.set(2, 2, 2);
            content.rotation.x = 0.5;//Math.PI/12;

            content.matrixAutoUpdate = true;
            content.updateMatrix();
            content.name = 'table';
            // content.id = 1;
            // setModelHandler(content);

            scene.add(gltf.scene);
            setIsModelLoadedHandler(true);
        }, undefined, function (error) {
            console.error(error);
        });

        //Light
        var light = new THREE.DirectionalLight("#ffffff", 0.5);
        var pointLight = new THREE.PointLight("#ffffff", 0.5);
        var pointLightBack = new THREE.PointLight("#ffffff", 0.5);
        var ambientLight = new THREE.AmbientLight(0xffffff, 1);
        light.position.set(0, -70, 100).normalize();
        pointLight.position.set(0, -40, 300);
        pointLightBack.position.set(0, -40, -100);

        scene.add(light);
        scene.add(pointLight);
        scene.add(pointLightBack);
        scene.add(ambientLight);


        camera.position.z = 5;
    
        // window.addEventListener('resize', onWindowResize, false)
        // function onWindowResize() {
        //     camera.aspect = window.innerWidth / window.innerHeight
        //     camera.updateProjectionMatrix()
        //     renderer.setSize(window.innerWidth, window.innerHeight)
        //     renderer.render(scene, camera);
        // }


        animate();
    }
    }, [])


    // const tableGeometry = scene.getObjectByName('table');

    function animate() {
        requestAnimationFrame(animate);

        if (isModelLoaded === true && tableGeometry != undefined) {
            tableGeometry.rotation.y += 0.01;
            // tableGeometry.rotation.y += 0.01;            
        }


        renderer.render(scene, camera);
    };

    const tableGeometry = scene.getObjectByName('table');
    if (isModelLoaded === true) {
        console.log(tableGeometry);
        animate();

    }



    return (<></>);
};

export default Model;