// import { Scene, PerspectiveCamera } from 'three';
import * as THREE from 'three';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useState } from 'react';

const Model = () => {

    const [count, setCount] = useState(0);

    var mesh;

    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff');

    //camera
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //texture
    const texture = new THREE.TextureLoader().load( "./models/wooden_table/textures/wooden_table_02_diff_4k.jpg" ,
            function ( texture ) {
                // in this example we create the material when the texture is loaded
                const material = new THREE.MeshBasicMaterial( {
                    map: texture
                } );
            }, 
        );
    
    //loader
    const loader = new GLTFLoader();    
    loader.load('./models/wooden_table/wooden_table_02_4k.gltf', function ( gltf ) {
          
        const content = gltf.scene;
        content.scale.set(2, 2, 2);
        content.rotation.x = 0.5;//Math.PI/12;
        
        content.matrixAutoUpdate = true;
        content.updateMatrix();
        content.name = 'table';
        // content.id = 1;
        
        scene.add( gltf.scene );  
    }, undefined, function ( error ) {    
        console.error( error );    
    } );

    const tableGeometry = scene.getObjectByName('table');
    console.log(tableGeometry?.isObject3D);
    

    //element
    // const geometry = new THREE.BoxGeometry( 2,2,2 );
    // const material = new THREE.MeshBasicMaterial( { color: 0xb86151, map: texture} );
    // const cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    //Light
    var light = new THREE.DirectionalLight("#ffffff", 0.5);
    var pointLight = new THREE.PointLight("#ffffff", 0.5);
    var pointLightBack = new THREE.PointLight("#ffffff", 0.5);
    var ambientLight = new THREE.AmbientLight(0xffffff, 1);
    light.position.set( 0, -70, 100 ).normalize();
    pointLight.position.set(0,-40,300);
    pointLightBack.position.set(0,-40,-100);

    scene.add(light);
    scene.add(pointLight);
    scene.add(pointLightBack);
    scene.add(ambientLight);

    //Floor ///////////////////////////////////////////
    // const meshFloor = new THREE.Mesh(
    // 	new THREE.PlaneGeometry(40,40,40,40),
    // 	new THREE.MeshPhongMaterial({color:0xff0000})
    // );

    // meshFloor.rotation.x -= Math.PI/2;
    // meshFloor.position.y = -2;
    // meshFloor.receiveShadow = true;
    // scene.add(meshFloor);
    // Floor end //////////////////////////////////

    camera.position.z = 5;

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render( scene, camera );
    }

    function animate() {
        requestAnimationFrame( animate );

        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };


    useEffect(() => {
        animate();

    },[]);


    return (<>
        
    </>);
};

export default Model;