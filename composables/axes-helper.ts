import { AxesHelper } from "three";

export const useAxesHelper = (barLength: number) => {
  const axesHelper = new AxesHelper(barLength);

  return { axesHelper };
};
