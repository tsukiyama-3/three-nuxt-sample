import { BufferGeometry, Material, Mesh } from "three";

export const useMesh = (geometry: BufferGeometry, material: Material) => {
  const mesh = new Mesh(geometry, material);

  return { mesh };
};
