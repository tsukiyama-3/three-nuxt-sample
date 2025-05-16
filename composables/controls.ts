import type { PerspectiveCamera, OrthographicCamera } from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"

export const useControls = (camera: PerspectiveCamera | OrthographicCamera, element: HTMLElement) => {
  const controls = new OrbitControls(camera, element)

  return { controls }
}