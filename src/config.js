import { degreeToRadians as d } from './utils';

export const configureCameras = {
  top: {
      position: [0, 5, 0],
      rotation: [-d(90), 0, 0]
  },
  front: {
      position: [0, 0, 5],
      rotation: [0, 0, 0]
  },
  perspective: {
      position: [5, 5, 0],
      rotation: [-d(90), d(45), d(90)]
  }
}

export const configMove = {
  perspective: {
      up: [-0.2, 0.2, 0],
      right: [0, 0, -0.2],
      down: [0.2, -0.2, 0],
      left: [0, 0, 0.2],
  },
  front: {
      up: [0, 0.2, 0],
      right: [0.2, 0, 0],
      down: [0, -0.2, 0],
      left: [-0.2, 0, 0],
  },
  top: {
      up: [0, 0, 0.2],
      right: [-0.2, 0, 0],
      down: [0, 0, -0.2],
      left: [0.2, 0, 0],
  }
}
