import { MeshBasicMaterial } from "three";

type Option = Partial<{
  color: number;
}>;

export const useMaterial = (option: Option = {}) => {
  const mergedOption = {
    color: 0x3399ff,
    ...option,
  };

  const material = new MeshBasicMaterial(mergedOption);

  return { material };
};
