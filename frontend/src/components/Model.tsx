// import { Scene, PerspectiveCamera } from 'three';
import * as THREE from 'three';
import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#fefefe');

    //camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    //orbit control
    const controls = new OrbitControls( camera, renderer.domElement );


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
            content.receiveShadow = true;

            scene.add(gltf.scene);


            loader.load('./models/plant/potted_plant_02_4k.gltf', function (gltf) {

                const content = gltf.scene;
                content.scale.set(1, 1, 1);
                content.position.y = 1.8;
                content.rotation.x = 0.5;//Math.PI/12;
                // content.rotation.z = 0.1;
                content.translateZ(1);
    
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
        var light = new THREE.DirectionalLight("#fefefe", 1.2);
        var pointLight = new THREE.PointLight("#ffffff", 0.5);
        var pointLightBack = new THREE.PointLight("#ffffff", 0.5);
        var ambientLight = new THREE.AmbientLight(0x222222, 1);
        var hemisterialLight = new THREE.HemisphereLight("#00aafe", "#feaa00", 1.5);
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


        camera.position.z = 5;

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        //Create a sphere that cast shadows (but does not receive them)
        const sphereGeometry = new THREE.SphereGeometry( 4, 50, 50 ); //5,32,32
        const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0x0000ff, wireframe: false } ); //ff0000
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        sphere.castShadow = true; //default is false
        sphere.receiveShadow = false; //default
        sphere.position.set(-10, 10, 0);
        scene.add( sphere );

        const helper = new THREE.CameraHelper( light.shadow.camera );
        // scene.add( helper );

    
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



    function animate() {
        requestAnimationFrame(animate);

        // if (isModelLoaded === true && tableGeometry != undefined && plantGeometry != undefined) {
        //     tableGeometry.rotation.y += 0.01;            
        //     plantGeometry.rotation.y += 0.01;            
        // }
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