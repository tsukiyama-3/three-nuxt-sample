import {
  WebGLRenderer,
  Line,
  Scene,
  PerspectiveCamera,
  Vector3,
  SphereGeometry,
  LineBasicMaterial,
} from "three";

export const useBox = (container: Ref<HTMLElement>) => {
  const init = () => {
    const renderer = new WebGLRenderer();
    renderer.setSize(300, 200);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.value.appendChild(renderer.domElement);
    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 300 / 200, 0.1, 1000);
    camera.position.set(20, 20, 20);
    camera.lookAt(new Vector3(0, 0, 0));
    const geometry = new SphereGeometry(10, 32, 32);
    const material = new LineBasicMaterial({ color: 0x6699ff, linewidth: 1 });
    const sphere = new Line(geometry, material);
    scene.add(sphere);
    const tick = () => {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();
    onUnmounted(() => {
      renderer.dispose();
      renderer.forceContextLoss();
    });
  };

  return { init };
};
