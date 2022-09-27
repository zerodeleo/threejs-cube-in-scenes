import * as THREE from 'three'
import scene from './scene';
import { sizes } from './sizes';
import cube from './objects';
import cameras from './cameras';
import { canvas } from './canvas';

/**
 * Renderers
 */
 export const initRender = (canvas, camera) => {
  const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)
};

export const render = (name) => {
  name === 'perspective' ? cameras[name].lookAt(cube.position) : null;
  initRender(canvas[name], cameras[name]);
}
