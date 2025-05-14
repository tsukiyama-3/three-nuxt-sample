import { PerspectiveCamera, Vector3 } from "three";

type Option = Partial<{
  fovy: number;
  near: number;
  far: number;
  position: Vector3;
  lookAt: Vector3;
  aspect: number;
}>;

export const useCamera = (option: Option = {}) => {
  const mergedOption = {
    fovy: 60,
    near: 0.1,
    far: 10.0,
    position: new Vector3(0.0, 2.0, 5.0),
    lookAt: new Vector3(0.0, 0.0, 0.0),
    aspect: window.innerWidth / window.innerHeight,
    ...option,
  };

  const camera = new PerspectiveCamera(
    mergedOption.fovy,
    mergedOption.aspect,
    mergedOption.near,
    mergedOption.far
  );

  camera.position.copy(mergedOption.position);
  camera.lookAt(mergedOption.lookAt);

  return { camera };
};
