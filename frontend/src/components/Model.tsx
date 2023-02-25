// import { Scene, PerspectiveCamera } from 'three';
import * as THREE from 'three';
import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Vector3 } from '@react-three/fiber';



    //renderer
    const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    // document.body.appendChild(renderer.domElement);

    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#fefefe');

    //camera
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

    //orbit control
    const controls = new OrbitControls( camera, renderer.domElement );
    // camera.position.set( -0.904, 0.809, 1.100 );
    const div = 0.9;
    camera.position.set( -0.904/div, 0.809/div, 1.100/div );
    camera.rotation.set((-20.42 * Math.PI / 180), (-37.61 * Math.PI / 180), (-12.8 * Math.PI / 180));


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
            content.scale.set(1,1,1);
            // content.rotation.x = 0.5;
            content.translateY(-0.4);

            content.matrixAutoUpdate = true;
            content.updateMatrix();
            content.name = 'table';
            content.receiveShadow = true;

            scene.add(gltf.scene);


            loader.load('./models/plant/potted_plant_02_4k.gltf', function (gltf) {

                const content = gltf.scene;
                content.scale.set(0.4, 0.4, 0.4);
                // content.position.y = 1.8;
                // content.rotation.x = 0.5;
                // content.translateZ(1);
                content.translateY(0.4);
    
                content.matrixAutoUpdate = true;
                content.updateMatrix();
                content.name = 'plant';
                content.receiveShadow = true;
    
                scene.add(gltf.scene);

                setIsModelLoadedHandler(true);
            }, undefined, function (error) {
                console.error(error);
            });



            // setIsModelLoadedHandler(true);
        }, undefined, function (error) {
            console.error(error);
        });

        

        //Light
        var light = new THREE.DirectionalLight("#fefefe", 1.5);
        var pointLight = new THREE.PointLight("#ffffff", 0.4);
        var pointLightBack = new THREE.PointLight("#ffffff", 0.5);
        var ambientLight = new THREE.AmbientLight(0x222222, 1.3);
        var hemisterialLight = new THREE.HemisphereLight("#00aafe", "#feaa00", 1.8);
        light.position.set(5, 10, 7.5).normalize();
        pointLight.position.set(0, -40, 300);
        pointLightBack.position.set(0, -40, -100);
        ambientLight.position.set(0, 0, 0);
        hemisterialLight.position.set(0, 10, 0);
        light.castShadow = true;
        light.shadow.camera.bottom = -12;

        scene.add(light);
        scene.add(pointLight);
        // scene.add(pointLightBack);
        scene.add(ambientLight);
        scene.add(hemisterialLight);


        // camera.position.z = 4.5;
        // // camera.rotateY(90 * Math.PI / 180);
        // // camera.rotation.y = 1.5;//90 * Math.PI / 180;
        // // camera.rotation.y = (60 * Math.PI / 180);
        // camera.rotation.set(Math.PI / -2, 0, 0);

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        //Create a sphere that cast shadows (but does not receive them)
        // const sphereGeometry = new THREE.SphereGeometry( 4, 50, 50 ); //5,32,32
        // const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff, wireframe: true } ); //ff0000
        // const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        // sphere.castShadow = true; //default is false
        // sphere.receiveShadow = false; //default
        // sphere.position.set(-10, 10, 0);
        // scene.add( sphere );

        const helper = new THREE.CameraHelper( light.shadow.camera );
        // scene.add( helper );

    
        // window.addEventListener('resize', onWindowResize, false)
        // function onWindowResize() {
        //     camera.aspect = window.innerWidth / window.innerHeight
        //     camera.updateProjectionMatrix()
        //     renderer.setSize(window.innerWidth, window.innerHeight)
        //     renderer.render(scene, camera);
        // }

        const box = document.getElementsByClassName("Box_configView__IKlTh");
        console.log(box);
        console.log(box.item(0));
        const boxScene: Element | null = box.item(0);
        console.log('type: ', typeof(boxScene));
        if (box.item(0) != null) {
            boxScene?.appendChild(renderer.domElement);
        }

        // animate();
    }
    }, [])



    function animate() {
        requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
    };

    const tableGeometry = scene.getObjectByName('table');
    const plantGeometry = scene.getObjectByName('plant');
    if (isModelLoaded === true) {
        console.log(tableGeometry);
        animate();

    }



    return (<></>);
};

export default Model;