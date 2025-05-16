import { DirectionalLight, Vector3 } from "three";

type Option = Partial<{
  color: number;
  intensity: number;
  position: Vector3;
}>;

export const useLight = (option: Option = {}) => {
  const mergedOption = {
    color: 0xffffff,
    intensity: 1.0,
    position: new Vector3(1.0, 1.0, 1.0),
    ...option,
  };

  const light = new DirectionalLight(
    mergedOption.color,
    mergedOption.intensity
  );
  light.position.copy(mergedOption.position);

  return { light };
};
