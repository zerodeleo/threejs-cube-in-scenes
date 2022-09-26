import * as THREE from 'three'
import scene from './scene';
import { sizes } from './sizes';

export const degreeToRadians = (degree) => degree * Math.PI / 180;

// AxesHelper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// GridHelper
const gridHelper = new THREE.GridHelper(50, 100);
scene.add(gridHelper);

/**
 * Renderers
 */
 export const render = (canvas, camera) => {
  const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)
};
