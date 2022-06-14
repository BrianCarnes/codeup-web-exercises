// import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

let scene, camera, cloudParticles = [],composer;
let renderer = new THREE.WebGLRenderer();

/* Establish Scene */
scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x310047, 0.001);

camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,1000);

composer = new POSTPROCESSING.EffectComposer(renderer);
composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));

/* Establish Renderer and Background Fog Color*/
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(scene.fog.color);
document.body.appendChild(renderer.domElement);

/* Base Declaration for Orbit Controls */
// const controls = new OrbitControls(camera, renderer.domElement); //allows user to drag and scroll the camera

/* Camera Positioning */
camera.position.z = 1;
camera.rotation.x = 1.16;
camera.rotation.y = -0.12;
camera.rotation.z = 0.27;
// controls.update();

/* Lighting */
let ambient = new THREE.AmbientLight(0x555555);
let directionalLight = new THREE.DirectionalLight(0xff8c19);
directionalLight.position.set(0,0,1);
let orangeLight = new THREE.PointLight(0xcc6600,50,450,1.7); //PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
orangeLight.position.set(200,300,100);
let redLight = new THREE.PointLight(0xd8547e,50,450,1.7);
redLight.position.set(100,300,100);
let blueLight = new THREE.PointLight(0x3677ac,50,450,1.7);
blueLight.position.set(300,300,200);

scene.add(ambient);
scene.add(directionalLight);
scene.add(orangeLight);
scene.add(redLight);
scene.add(blueLight);

/* Textures for Nebula */
cloudParticles = []

let loader = new THREE.TextureLoader();

loader.load('img/smoke.png', function(texture){
	let cloudGeo = new THREE.PlaneBufferGeometry(500,500);
	let cloudMaterial = new THREE.MeshLambertMaterial({
		map:texture,
		transparent: true
	});

	for(let p=0; p<50; p++) {
		let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
		cloud.position.set(
			Math.random()*800 -400,
			500,
			Math.random()*500-500
		);
		cloud.rotation.x = 1.16;
		cloud.rotation.y = -0.12;
		cloud.rotation.z = Math.random()*2*Math.PI;
		cloud.material.opacity = 0.55;
		cloudParticles.push(cloud);
		scene.add(cloud);
	}
});

/* Textures for starry background */
loader.load("img/stars.jpg", function(texture) {

	const textureEffect = new POSTPROCESSING.TextureEffect({
		blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
		texture: texture
	});
	textureEffect.blendMode.opacity.value = 0.6;

	const bloomEffect = new POSTPROCESSING.BloomEffect({
		blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
		kernelSize: POSTPROCESSING.KernelSize.SMALL,
		useLuminanceFilter: true,
		luminanceThreshold: 0.15,
		luminanceSmoothing: 0.75
	});
	bloomEffect.blendMode.opacity.value = 1.5;

	let effectPass = new POSTPROCESSING.EffectPass(
		camera,
		bloomEffect,
		textureEffect
	);
	effectPass.renderToScreen = true;

	composer = new POSTPROCESSING.EffectComposer(renderer);
	composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));
	composer.addPass(effectPass);
});

/* Responsive Design Event Listener */
window.addEventListener("resize", onWindowResize, false);


/* Responsive Design */
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

/* Particle Renderer --called in Nebula Function*/
function animate() {
	requestAnimationFrame(animate);
	composer.render(0.1); //postprocessing renderer
	cloudParticles.forEach(p => {
		p.rotation.z -=0.001;
	}); //for cloud rotations
	// controls.update(); //adds orbit controls functionality
}

animate();