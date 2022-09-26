import * as THREE from 'three';
import { aspectRatio } from './sizes';
import scene from './scene';
import { configureCameras } from './config';

/**
 * Cameras
 */
 const cameras = {
  top: new THREE.PerspectiveCamera(45, aspectRatio),
  front: new THREE.PerspectiveCamera(45, aspectRatio),
  perspective: new THREE.PerspectiveCamera(45, aspectRatio)
};

const initCameras = (name) => {
  console.log(configureCameras[name]);
  cameras[name].position.set(
      configureCameras[name].position[0],
      configureCameras[name].position[1],
      configureCameras[name].position[2],
  );
  cameras[name].rotation.set(
      configureCameras[name].rotation[0],
      configureCameras[name].rotation[1],
      configureCameras[name].rotation[2],
  );
  scene.add(cameras[name]);
}

initCameras('top');
initCameras('front');
initCameras('perspective');


export const move = (camera, vector3) => {
  camera.position.x += vector3[0];
  camera.position.y += vector3[1];
  camera.position.z += vector3[2];
};

export default cameras;
