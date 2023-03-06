// import { Scene, PerspectiveCamera } from 'three';
import * as THREE from 'three';
import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Texture from '../assets/Textures';

import {modelScene} from '../assets/Scene';


//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

//camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

//orbit control
const controls = new OrbitControls(camera, renderer.domElement);
const div = 0.9;
camera.position.set(-0.904 / div, 0.809 / div, 1.100 / div);
camera.rotation.set((-20.42 * Math.PI / 180), (-37.61 * Math.PI / 180), (-12.8 * Math.PI / 180));


const Model = () => {
    
    const scene = modelScene;
    scene.background = new THREE.Color('#fefefe');

    const [isModelLoaded, setIsModelLoaded] = useState(false);

    const setIsModelLoadedHandler = (state: boolean) => {
        setIsModelLoaded(state);
    }

    type tabT = {
        brown: string,
        white: string,
        grey: string,
        orange: string,
        purple: string
    };

    const tableTextures: tabT = {
        brown: 'brown',
        white: 'white',
        grey: 'grey',
        orange: 'orange',
        purple: 'purple'
    };

    useEffect(() => {
        if (isModelLoaded === false) {
            //loader
            const loader = new GLTFLoader();
            loader.load('./models/wooden_table/wooden_table_02_4k.gltf', function (gltf) {

                const content = gltf.scene;
                content.scale.set(1, 1, 1);
                content.translateY(-0.4);

                content.matrixAutoUpdate = true;
                content.updateMatrix();
                content.name = 'table';
                content.receiveShadow = true;

                const brownTexture = new THREE.TextureLoader().load( "./models/wooden_table/textures/wooden_table_02_diff_4k.jpg")
                
                content.traverse( function( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material.map = brownTexture;
                        child.material.map.needsUpdate = true;
                    }
                } );

                scene.add(gltf.scene);

                
                loader.load('./models/plant/potted_plant_02_4k.gltf', function (gltf) {

                    const content = gltf.scene;
                    content.scale.set(0.4, 0.4, 0.4);
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


            }, undefined, function (error) {
                console.error(error);
            });


            //Light
            var light = new THREE.DirectionalLight("#fefefe", 1.3);
            var pointLight = new THREE.PointLight("#ffffff", 0.5);
            var pointLightBack = new THREE.PointLight("#ffffff", 0.4);
            var ambientLight = new THREE.AmbientLight(0x222222, 0.5);
            var hemisterialLight = new THREE.HemisphereLight("#00aafe", "#feaa00", 0.1);
            light.position.set(5, 10, 7.5).normalize();
            pointLight.position.set(0, -40, 300);
            pointLightBack.position.set(0, -40, -100);
            ambientLight.position.set(0, 0, 0);
            hemisterialLight.position.set(0, 10, 0);
            light.castShadow = true;
            light.shadow.camera.bottom = -12;

            scene.add(light);
            scene.add(pointLight);
            scene.add(pointLightBack);
            scene.add(ambientLight);
            scene.add(hemisterialLight);


            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;


            const box = document.getElementsByClassName("Box_configView__IKlTh");
            const boxScene: Element | null = box.item(0);
            if (box.item(0) != null) {
                boxScene?.appendChild(renderer.domElement);
            }

        }
    }, [])



    function animate() {
        requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
    };


    if (isModelLoaded === true) {
        // Texture.LoadTexture(scene, tableTextures.orange);

        animate();
    }



    return (<></>);
};

export default Model;