import {
  BoxGeometry,
  SphereGeometry,
  TorusGeometry,
  ConeGeometry,
} from "three";

type Option = Partial<{
  width: number;
  height: number;
  depth: number;
}>;

export const useGeometry = (option: Option = {}) => {
  const mergedOption = {
    width: 1.0,
    height: 1.0,
    depth: 1.0,
    ...option,
  };

  const geometry = new BoxGeometry(
    mergedOption.width,
    mergedOption.height,
    mergedOption.depth
  );

  return { geometry };
};

export const useSphereGeometry = (option: Option = {}) => {
  const mergedOption = {
    width: 0.5,
    height: 16.0,
    depth: 16.0,
    ...option,
  };

  const sphereGeometry = new SphereGeometry(
    mergedOption.width,
    mergedOption.height,
    mergedOption.depth
  );

  return { sphereGeometry };
};

export const useTorusGeometry = () => {
  const torusGeometry = new TorusGeometry(0.5, 0.2, 8, 16);

  return { torusGeometry };
};

export const useConeGeometry = () => {
  const coneGeometry = new ConeGeometry(0.5, 1.0, 16);

  return { coneGeometry };
};
