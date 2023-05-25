import * as THREE from 'three';

interface textureInterface {
    brownTexture: THREE.Texture;
    greyTexture: THREE.Texture;
    orangeTexture: THREE.Texture;
    whiteTexture: THREE.Texture;
    purpleTexture: THREE.Texture;
}

const textures: textureInterface = {
    brownTexture: new THREE.TextureLoader().load("./models/wooden_table/textures/wooden_table_02_diff_4k.jpg"),
    greyTexture: new THREE.TextureLoader().load("./models/wooden_table/textures/wooden_table_02_rough_4k.jpg"),
    orangeTexture: new THREE.TextureLoader().load("./models/wooden_table/textures/wooden_table_02_arm_4k.jpg"),
    whiteTexture: new THREE.TextureLoader().load("./models/wooden_table/textures/wooden_table_02_ao_4k.jpg"),
    purpleTexture: new THREE.TextureLoader().load("./models/wooden_table/textures/wooden_table_02_nor_gl_4k.jpg"),
}

export default class Texture {
    scene: THREE.Scene;
    texture: string;

    constructor(scene: THREE.Scene, texture: string) {
        this.texture = texture;
        this.scene = scene;
    }

    static #GetURL(color: string) {
        switch (color) {
            case 'brown': return textures.brownTexture;
            case 'grey': return textures.greyTexture;
            case 'orange': return textures.orangeTexture;
            case 'white': return textures.whiteTexture;
            case 'purple': return textures.purpleTexture;
            default: return textures.brownTexture;
        }
    }

    static LoadTexture(scene: THREE.Scene, texture: string) {
        const tableGeometry = scene.getObjectByName('table');

        if (tableGeometry !== undefined)
            tableGeometry.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material.map = Texture.#GetURL(texture);
                    child.material.map.needsUpdate = true;
                }
            });
    }
}