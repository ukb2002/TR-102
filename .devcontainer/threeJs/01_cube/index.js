const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2, 2, 2);
const materil = new THREE.MeshBasicMaterial({ color: "red" });

const box = new THREE.Mesh(geometry, materil);
scene.add(box);

const size = {
  width: 700,
  heigth: 500,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.heigth);
camera.position.z = 4;
camera.position.x = 2;

scene.add(camera);

//rendering
const target = document.querySelector(".wbgl");
const renderer = new THREE.WebGLRenderer({ canvas: target });

renderer.setSize(size.width, size.heigth);
renderer.render(scene, camera);