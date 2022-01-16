import * as THREE from "three";

import * as dat from "dat.gui";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
render.seetPixelRatio(devicePixelRation); // if the cube sides are blur

document.body.appendChild(renderer.domElement);

scene.add(mesh);
camera.position.z = 5;
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
    color: "blue",
});
const mesh = new THREE.Mesh(geometry, material);
const planMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    site: THREE.DoubleSide,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();