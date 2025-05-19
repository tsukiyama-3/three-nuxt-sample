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

export const use005 = () => {
  if (!process.client) {
    return { render: () => {} };
  }
  const isKeydown = ref(false);
  // scene
  const { scene } = useScene();
  // renderer
  const { renderer } = useRenderer();
  // camera
  const { camera } = useCamera();
  // geometry
  const { geometry } = useGeometry();
  // material
  const { material } = useMeshLambertMaterial();
  // mesh
  const { mesh: box } = useMesh(geometry, material);
  scene.add(box);
  // controls
  const { controls } = useControls(camera, renderer.domElement);
  // axes
  const { axesHelper } = useAxesHelper(5.0);
  scene.add(axesHelper);
  // light
  const { light } = useLight();
  scene.add(light);

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

export const use006 = () => {
  if (!process.client) {
    return { render: () => {} };
  }
  const isKeydown = ref(false);
  // scene
  const { scene } = useScene();
  // renderer
  const { renderer } = useRenderer();
  // camera
  const { camera } = useCamera();
  // geometry
  const { geometry } = useGeometry();
  // material
  const { material } = useMeshPhongMaterial();
  // mesh
  const { mesh: box } = useMesh(geometry, material);
  scene.add(box);
  // controls
  const { controls } = useControls(camera, renderer.domElement);
  // axes
  const { axesHelper } = useAxesHelper(5.0);
  scene.add(axesHelper);
  // light
  const { light } = useLight();
  scene.add(light);
  const { ambientLight } = useAmbientLight();
  scene.add(ambientLight);

  // render
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    if (isKeydown.value) {
      box.rotation.x -= 0.05;
      box.rotation.y += 0.05;
    }
    renderer.render(scene, camera);
  };

  return { render, renderer, isKeydown };
};

export const use007 = () => {
  if (!process.client) {
    return { render: () => {} };
  }
  const isKeydown = ref(false);
  // scene
  const { scene } = useScene();
  // renderer
  const { renderer } = useRenderer();
  // camera
  const { camera } = useCamera();
  // geometry
  const { geometry } = useGeometry();
  const { sphereGeometry } = useSphereGeometry();
  const { torusGeometry } = useTorusGeometry();
  const { coneGeometry } = useConeGeometry();
  // material
  const { material } = useMeshPhongMaterial();
  // mesh
  const { mesh: box } = useMesh(geometry, material);
  const { mesh: sphere } = useMesh(sphereGeometry, material);
  const { mesh: torus } = useMesh(torusGeometry, material);
  const { mesh: cone } = useMesh(coneGeometry, material);
  scene.add(box);
  scene.add(sphere);
  scene.add(torus);
  scene.add(cone);
  box.position.set(-1, 1, 0);
  sphere.position.set(1, 1, 0);
  torus.position.set(-1, -1, 0);
  cone.position.set(1, -1, 0);
  // controls
  const { controls } = useControls(camera, renderer.domElement);
  // axes
  const { axesHelper } = useAxesHelper(5.0);
  scene.add(axesHelper);
  // light
  const { light } = useLight();
  scene.add(light);
  const { ambientLight } = useAmbientLight();
  scene.add(ambientLight);

  // render
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    if (isKeydown.value) {
      box.rotation.x -= 0.05;
      box.rotation.y += 0.05;
      sphere.rotation.x -= 0.05;
      sphere.rotation.y += 0.05;
      torus.rotation.x -= 0.05;
      torus.rotation.y += 0.05;
      cone.rotation.x -= 0.05;
      cone.rotation.y += 0.05;
    }
    renderer.render(scene, camera);
  };

  return { render, renderer, isKeydown };
};

export const use008 = () => {
  if (!process.client) {
    return { render: () => {} };
  }
  const isKeydown = ref(false);
  // scene
  const { scene } = useScene();
  // renderer
  const { renderer } = useRenderer();
  // camera
  const { camera } = useCamera();
  // geometry
  const { geometry } = useGeometry();
  const { sphereGeometry } = useSphereGeometry();
  const { torusGeometry } = useTorusGeometry();
  const { coneGeometry } = useConeGeometry();
  // material
  const { material } = useMeshPhongMaterial();
  // mesh
  const { mesh: box } = useMesh(geometry, material);
  const { mesh: sphere } = useMesh(sphereGeometry, material);
  const { mesh: torus } = useMesh(torusGeometry, material);
  const { mesh: cone } = useMesh(coneGeometry, material);
  scene.add(box);
  scene.add(sphere);
  scene.add(torus);
  scene.add(cone);
  box.position.set(-1, 1, 0);
  sphere.position.set(1, 1, 0);
  torus.position.set(-1, -1, 0);
  cone.position.set(1, -1, 0);
  // controls
  const { controls } = useControls(camera, renderer.domElement);
  // axes
  const { axesHelper } = useAxesHelper(5.0);
  scene.add(axesHelper);
  // light
  const { light } = useLight();
  scene.add(light);
  const { ambientLight } = useAmbientLight();
  scene.add(ambientLight);

  // render
  const render = () => {
    requestAnimationFrame(render);
    controls.update();
    if (isKeydown.value) {
      box.rotation.x -= 0.05;
      box.rotation.y += 0.05;
      sphere.rotation.x -= 0.05;
      sphere.rotation.y += 0.05;
      torus.rotation.x -= 0.05;
      torus.rotation.y += 0.05;
      cone.rotation.x -= 0.05;
      cone.rotation.y += 0.05;
    }
    renderer.render(scene, camera);
  };

  onMounted(() => {
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  });

  return { render, renderer, isKeydown };
};
