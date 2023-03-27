import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Texture from '../../assets/Textures';


const Cart2dModel: React.FC<{variant: string}> = (props) => {
    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas = canvasRef.current!;
        const renderer = new THREE.WebGLRenderer({ canvas });
        const scene = new THREE.Scene();
        // const camera = new THREE.OrthographicCamera(width/-2, width/2, heigth/2, heigth/-2, 1, 1000);
        const camera = new THREE.OrthographicCamera(-2, 2, 2, -1, 0.1, 1000);
    
        const width = 90; //800;
        const heigth = 60; //600;
    
            const loader = new GLTFLoader();    
            loader.load('./models/wooden_table/wooden_table_02_4k.gltf', function ( gltf ) {
    
                const content = gltf.scene;
                content.scale.set(2.6,2.6,2.6);
                content.rotation.x = 0.5;
                content.rotation.y = 0.2;
                content.translateY(-0.5);
    
                // content.matrixAutoUpdate = true;
                content.name = 'table';
                content.updateMatrix();

                
                scene.add( content );  
                Texture.LoadTexture(scene, props.variant);
                
                camera.position.set(-0.2, -1.2, 5.5);
                camera.lookAt(0, 0, 0);
    
                renderer.setSize(width, heigth);
    
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
    
                scene.background = new THREE.Color( '#ffffff' );
    
                function animate() {
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                }
    
                animate();
                console.log(scene.children);
    
            }, undefined, function ( error ) {    
            console.error( error );    
            } );
    
    
        
    }, []);
    
        
      return <canvas ref={canvasRef} />;
}

export default Cart2dModel;