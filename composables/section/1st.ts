export const use001 = (container: Ref<HTMLElement>) => {
  // scene
  const { scene } = useScene();
  // renderer
  const { renderer } = useRenderer();
  container.value.appendChild(renderer.domElement);
  // camera
  const { camera } = useCamera();
  // geometry
  const { geometry } = useGeometry();
  // material
  const { material } = useMaterial();
  // mesh
  const { mesh: box } = useMesh(geometry, material);
  scene.add(box);

  // render
  const render = () => {
    renderer.render(scene, camera);
  };

  return { render };
};

export const use002 = (container: Ref<HTMLElement>) => {
  // scene
  const { scene } = useScene();
  // renderer
  const { renderer } = useRenderer();
  container.value.appendChild(renderer.domElement);
  // camera
  const { camera } = useCamera();
  // geometry
  const { geometry } = useGeometry();
  // material
  const { material } = useMaterial();
  // mesh
  const { mesh: box } = useMesh(geometry, material);
  scene.add(box);
  // controls
  const { controls } = useControls(camera, renderer.domElement);

  // render
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
  };

  return { render };
};

export const use003 = (container: Ref<HTMLElement>) => {
  // scene
  const { scene } = useScene();
  // renderer
  const { renderer } = useRenderer();
  container.value.appendChild(renderer.domElement);
  // camera
  const { camera } = useCamera();
  // geometry
  const { geometry } = useGeometry();
  // material
  const { material } = useMaterial();
  // mesh
  const { mesh: box } = useMesh(geometry, material);
  scene.add(box);
  // controls
  const { controls } = useControls(camera, renderer.domElement);
  // axes
  const { axesHelper } = useAxesHelper(5.0);
  scene.add(axesHelper);

  // render
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
  };

  return { render };
};

export const use004 = () => {
  if (!process.client) {
    return { render: () => {} };
  }
  // scene
  const { scene } = useScene();
  // renderer
  const { renderer } = useRenderer();
  // camera
  const { camera } = useCamera();
  // geometry
  const { geometry } = useGeometry();
  // material
  const { material } = useMaterial();
  // mesh
  const { mesh: box } = useMesh(geometry, material);
  scene.add(box);
  // controls
  const { controls } = useControls(camera, renderer.domElement);
  // axes
  const { axesHelper } = useAxesHelper(5.0);
  scene.add(axesHelper);
  const isKeydown = ref(false);

  // render
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    if (isKeydown.value) {
      box.rotation.y += 0.05;
    }
    renderer.render(scene, camera);
  };

  return { render, renderer, isKeydown };
};
