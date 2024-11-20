import * as THREE from "three";
import { AxesHelper } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

document.addEventListener("DOMContentLoaded", () => {
  const size = {
    width: 700,
    height: 500,
  };

  //Created Seen
  const scene = new THREE.Scene();

  //Created Object
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: "red" });
  const box = new THREE.Mesh(geometry, material);
  box.position.set(0, 0, 0); // Position the box at the origin of the scene
  box.scale.set(2, 2, 2); // Scale the box to make it more visible
  scene.add(box);

  //Created Camera
  const camera = new THREE.PerspectiveCamera(75,size.width / size.height,0.1,1000);
  camera.position.set(0, 0, 8); // Move the camera back along the z-axis
  scene.add(camera);

  //Created AxisHelper to see x,y and z axis of a object
  const axisHelper = new AxesHelper(5);
  scene.add(axisHelper);

  // Set up renderer
  const canvas = document.querySelector('.MyCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(size.width, size.height);

  // Initialize OrbitControls for free movement of object
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true; // Enable damping for smooth camera movement
  orbit.dampingFactor = 0.25; // Set damping factor

  // Render loop
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    orbit.update(); // Update controls
  }
  render();
});
