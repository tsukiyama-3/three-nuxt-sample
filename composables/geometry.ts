import { BoxGeometry } from "three";

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
