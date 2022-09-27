import * as THREE from 'three'
import scene from './scene';

export const degreeToRadians = (degree) => degree * Math.PI / 180;

// AxesHelper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// GridHelper
const gridHelper = new THREE.GridHelper(50, 100);
scene.add(gridHelper);
