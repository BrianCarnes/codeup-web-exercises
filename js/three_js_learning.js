import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import * as POSTPROCESSING from "https://cdn.jsdelivr.net/npm/postprocessing@6.7.0/build/postprocessing.min.js";

/* Initial Scene Setup */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .01, 1000);
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

/* Geometries */

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const torus = new THREE.Mesh(geometry,material);

scene.add(torus);

function addStar() {
	let geometry = new THREE.SphereGeometry(0.25, 24, 24);
	const material = new THREE.MeshStandardMaterial({color: 0xffffff});
	const star = new THREE.Mesh(geometry,material);

	const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

	star.position.set(x,y,z);
	scene.add(star);
}

Array(200).fill().forEach(addStar);

/* Background Image */
const spaceTexture = new THREE.TextureLoader().load("img/space.jpg")
scene.background = spaceTexture;

/* The Moon */
const moonTextureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
const moonDisplacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";
// const moonWorldURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg"

const moonTexture = new THREE.TextureLoader().load(moonTextureURL);
const moonDisplacementMap = new THREE.TextureLoader().load(moonDisplacementURL);
const moonMaterial = new THREE.MeshPhongMaterial (
	{ color: 0xffffff ,
		map: moonTexture ,
		displacementMap: moonDisplacementMap,
		displacementScale: 0.06,
		bumpMap: moonDisplacementMap,
		bumpScale: 0.04,
		reflectivity:0,
		shininess :0
	})

const moon = new THREE.Mesh(
	new THREE.SphereGeometry(3, 60, 60),
	moonMaterial
)
moon.position.z = 30;
moon.position.setX(-10);
scene.add(moon);

/* Lighting */
const pointLight = new THREE.PointLight(0xfffffff);
pointLight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200,50)
// scene.add(lightHelper, gridHelper);

/* Camera Controls */
const controls = new OrbitControls(camera, renderer.domElement); //allows user to drag and scroll the camera

function moveCamera() {
	const t = document.body.getBoundingClientRect().top;
	moon.rotation.x += 0.05;
	moon.rotation.y += 0.075;
	moon.rotation.z += 0.05;

	camera.position.z = t * -0.01;
	camera.position.x = t * -0.0002;
	camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

/* Recursive Animation Call */
function animate() {
	requestAnimationFrame(animate);
	torus.rotation.x += 0.01;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.01;

	controls.update();

	renderer.render(scene,camera);
}

animate();