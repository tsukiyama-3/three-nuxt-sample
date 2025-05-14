import { WebGLRenderer } from "three";

type Option = Partial<{
  color: number;
  width: number;
  height: number;
}>;

export const useRenderer = (option: Option = {}) => {
  const mergedOption = {
    color: 0x666666,
    width: window.innerWidth,
    height: window.innerHeight,
    ...option,
  };

  const renderer = new WebGLRenderer();

  renderer.setClearColor(mergedOption.color);
  renderer.setSize(mergedOption.width, mergedOption.height);

  return { renderer };
};
