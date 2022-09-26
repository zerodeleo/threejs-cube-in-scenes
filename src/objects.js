import * as THREE from 'three'
import scene from './scene';

/**
 * Cube
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xffa000 })
const cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 0.5, 0)
scene.add(cube);

export default cube;
