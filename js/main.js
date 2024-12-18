// Core Three.js
import * as THREE from 'https://unpkg.com/three@0.153.0/build/three.module.js';

// Addons
import Stats from 'https://unpkg.com/three@0.153.0/examples/jsm/libs/stats.module.js';
import { EffectComposer } from 'https://unpkg.com/three@0.153.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://unpkg.com/three@0.153.0/examples/jsm/postprocessing/RenderPass.js';
import { BokehPass } from 'https://unpkg.com/three@0.153.0/examples/jsm/postprocessing/BokehPass.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.153.0/examples/jsm/loaders/GLTFLoader.js';
import { GUI } from './gui.js';
import { LightingSystem } from './lighting.js';



const vertexShader = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 topColor;
  uniform vec3 bottomColor;
  uniform float offset;
  uniform float exponent;
  varying vec3 vWorldPosition;
  void main() {
    float h = normalize(vWorldPosition + offset).y;
    gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
  }
`;
const overcastUrl = new URL('../img/splashscreen/overcast.png', import.meta.url);
const flowerUrls = [
    '../glb/flower1.glb',
    '../glb/flower2.glb',
    '../glb/flower3.glb',
    '../glb/flower4.glb',
    '../glb/flower5.glb',
    '../glb/flower6.glb',
    '../glb/flower7.glb'
].map(url => new URL(url, import.meta.url));
const EnterUrl = new URL('../glb/Enter.glb', import.meta.url);

const scene = new THREE.Scene();
const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "default" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
const bokehPass = new BokehPass(scene, camera, { focus: 0, aperture: 0, maxblur: 0.15, width: window.innerWidth, height: window.innerHeight });
composer.addPass(renderPass);
composer.addPass(bokehPass);

const settings = {
    fog: { enabled: true, color: '#000000', density: 0.03 },
    gradient: {
        topColor: '#240b40',
        bottomColor: '#134423',
        offset: 2,
        exponent: 0.6,
        starField: {
            density: 2.2,
            brightness: 0.2,
            size: 0.025,
            flickerSpeed: 0.35
        }
    },
    cubes: {
        count: 100, size: 0.3, metalness: 0.7, roughness: 1, envMapIntensity: 1,
        rotationSpeed: 0.01, mouseInfluence: 0.5, mouseRange: 7,
        paddingX: 0.3, paddingY: 0.3, centerClearance: 2, minDistance: 0.7, spawnDepth: { min: 10, max: 33 }
    },
    dof: { focus: 0, aperture: 0, maxblur: 0.15 },
    lighting: {
        ambient: { color: '#784323', intensity: 1.2 },
        rect1: { color: '#ffffff', lookAt: { x: 0, y: 0, z: 0 } },
        rect2: { color: '#ffffff', lookAt: { x: 0, y: 0, z: 0 } },
        spot3: { color: '#100c34' },
        helpers: { enabled: false }
    },
    helpers: { enabled: false },
    stats: { polycount: 0 }
};

const flowers = [];
let flowerModels = [];
const assetLoader = new GLTFLoader();

const loadFlowerModel = (url) => {
    return new Promise((resolve, reject) => {
        assetLoader.load(url.href,
            (gltf) => {
                const model = gltf.scene.children[0];
                model.visible = true;
                resolve(model);
            },
            undefined,
            (error) => {
                console.error('An error occurred while loading the GLTF model:', error);
                reject(error);
            }
        );
    });
};

Promise.all(flowerUrls.map(loadFlowerModel)).then(models => {
    flowerModels = models;
    respawnFlowers();
}).catch(error => {
    console.error('Error loading flower models:', error);
});

const gui = initializeGUI();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let mouseX = 0, mouseY = 0;

function setupScene() {
    const colors = { topColor: new THREE.Color(settings.gradient.topColor), bottomColor: new THREE.Color(settings.gradient.bottomColor) };
    const uniforms = {
        topColor: { value: colors.topColor },
        bottomColor: { value: colors.bottomColor },
        offset: { value: settings.gradient.offset },
        exponent: { value: settings.gradient.exponent },
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        starDensity: { value: settings.gradient.starField.density },
        starBrightness: { value: settings.gradient.starField.brightness },
        starSize: { value: settings.gradient.starField.size },
        flickerSpeed: { value: settings.gradient.starField.flickerSpeed }
    };

    const skyGeo = new THREE.SphereGeometry(100, 32, 15);
    const skyMat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        side: THREE.BackSide
    });
    scene.add(new THREE.Mesh(skyGeo, skyMat));

    window.updateStarField = (time) => {
        uniforms.time.value = time;
    };

    const textureLoader = new THREE.TextureLoader();
    const envTexture = textureLoader.load(overcastUrl);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = envTexture;

    const lightingSystem = new LightingSystem(scene, settings, gui);
    setupFontAndUI(uniforms);
}

function setupFontAndUI(uniforms) {
    const textSettings = {
        textScale: 0.035,
        mouseRotationInfluence: 0.5,
        textDistance: 0.4,
        hoverScale: 1.2,
        hoverAnimationDuration: 0.3
    };

    assetLoader.load(EnterUrl.href, (gltf) => {
        const enterModel = gltf.scene;
        enterModel.position.set(0, 0, camera.position.z - textSettings.textDistance);
        enterModel.scale.set(textSettings.textScale, textSettings.textScale, textSettings.textScale);

        enterModel.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    metalness: 1.0,
                    roughness: 0.1,
                    envMapIntensity: 1.0,
                    color: 0xFFFFFF,
                    emissive: 0x000000,
                    emissiveIntensity: 0.0,
                });
                child.receiveShadow = true;
                child.castShadow = true;
            }
        });

        let isHovered = false;
        let scaleAnimationStart = null;
        let baseScale = textSettings.textScale;

        const updateModelScale = () => {
            baseScale = textSettings.textScale;
            enterModel.position.set(0, 0, camera.position.z - textSettings.textDistance);
            if (!scaleAnimationStart) {
                enterModel.scale.set(baseScale, baseScale, baseScale);
            }
        };

        const updateModelRotation = () => {
            enterModel.rotation.x = -mouseY * textSettings.mouseRotationInfluence;
            enterModel.rotation.y = mouseX * textSettings.mouseRotationInfluence;

            const hovering = Math.abs(mouseX) < 0.2 && Math.abs(mouseY) < 0.2;
            if (hovering !== isHovered) {
                isHovered = hovering;
                scaleAnimationStart = Date.now();
            }

            if (scaleAnimationStart) {
                const elapsed = (Date.now() - scaleAnimationStart) / 1000;
                const progress = Math.min(elapsed / textSettings.hoverAnimationDuration, 1);
                const startScale = isHovered ? baseScale : baseScale * textSettings.hoverScale;
                const targetScale = isHovered ? baseScale * textSettings.hoverScale : baseScale;
                const currentScale = startScale + (targetScale - startScale) * progress;
                enterModel.scale.set(currentScale, currentScale, currentScale);
                if (progress === 1) {
                    scaleAnimationStart = null;
                }
            }
        };

        if (!window.animatedText) window.animatedText = [];
        window.animatedText.push({ mesh: enterModel, update: updateModelRotation });

        updateModelScale();
        scene.add(enterModel);
        gui.setupTextFolder(textSettings, updateModelScale);
    });
}

function initializeGUI() {
    const guiManager = new GUI(scene, settings, flowers, bokehPass, respawnFlowers);
    guiManager.setupGUI();
    return guiManager;
}

function createFlower(spawnArea, modelIndex) {
    const flower = flowerModels[modelIndex].clone();
    const { x, y, z } = findValidPosition(spawnArea, flowers);
    const scale = settings.cubes.size * 2;
    flower.scale.set(scale, scale, scale);
    flower.position.set(x, y, z);
    flower.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    flower.rotationSpeed = {
        x: (Math.random() - 0.5) * settings.cubes.rotationSpeed,
        y: (Math.random() - 0.5) * settings.cubes.rotationSpeed,
        z: (Math.random() - 0.5) * settings.cubes.rotationSpeed
    };
    scene.add(flower);
    flowers.push(flower);
}

function respawnFlowers() {
    if (flowerModels.length === 0) return;
    flowers.forEach(flower => scene.remove(flower));
    flowers.length = 0;
    const visibleArea = getVisibleDimensions(camera, 15);
    const spawnArea = {
        width: visibleArea.width * (1 - settings.cubes.paddingX),
        height: visibleArea.height * (1 - settings.cubes.paddingY)
    };
    const flowerTypesCount = flowerModels.length;
    const baseCountPerType = Math.floor(settings.cubes.count / flowerTypesCount);
    const remainder = settings.cubes.count % flowerTypesCount;
    for (let modelIndex = 0; modelIndex < flowerTypesCount; modelIndex++) {
        for (let i = 0; i < baseCountPerType; i++) {
            createFlower(spawnArea, modelIndex);
        }
    }
    for (let i = 0; i < remainder; i++) {
        createFlower(spawnArea, i);
    }
}

function findValidPosition(spawnArea, existingFlowers) {
    let attempts = 0;
    while (attempts < 100) {
        const x = (Math.random() - 0.5) * spawnArea.width;
        const y = (Math.random() - 0.5) * spawnArea.height;
        if (Math.sqrt(x * x + y * y) < settings.cubes.centerClearance) continue;
        const z = -(settings.cubes.spawnDepth.min + Math.random() * (settings.cubes.spawnDepth.max - settings.cubes.spawnDepth.min)) + camera.position.z;
        if (isValidPosition(x, y, z, existingFlowers)) return { x, y, z };
        attempts++;
    }
    return { x: 0, y: 0, z: camera.position.z };
}

function isValidPosition(x, y, z, existingFlowers) {
    return !existingFlowers.some(flower => {
        const dx = flower.position.x - x;
        const dy = flower.position.y - y;
        const dz = flower.position.z - z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz) < settings.cubes.minDistance;
    });
}

function getVisibleDimensions(camera, distance) {
    const vFOV = camera.fov * Math.PI / 180;
    const height = 2 * Math.tan(vFOV / 2) * distance;
    const width = height * camera.aspect;
    return { width, height };
}

function checkCollisions() {
    for (let i = 0; i < flowers.length; i++) {
        const flower1 = flowers[i];
        const bbox1 = new THREE.Box3().setFromObject(flower1);
        for (let j = i + 1; j < flowers.length; j++) {
            const flower2 = flowers[j];
            const bbox2 = new THREE.Box3().setFromObject(flower2);
            if (bbox1.intersectsBox(bbox2)) {
                flower1.rotationSpeed.x *= -1;
                flower1.rotationSpeed.y *= -1;
                flower1.rotationSpeed.z *= -1;
                flower2.rotationSpeed.x *= -1;
                flower2.rotationSpeed.y *= -1;
                flower2.rotationSpeed.z *= -1;
            }
        }
    }
}

function animate() {
    stats.begin();
    requestAnimationFrame(animate);
    if (window.updateStarField) window.updateStarField(performance.now() * 0.001);
    settings.stats.polycount = scene.children
        .filter(obj => obj.isMesh)
        .reduce((total, mesh) => total + mesh.geometry.attributes.position.count / 3, 0);
    checkCollisions();
    flowers.forEach(flower => {
        const distanceToMouse = raycaster.ray.distanceToPoint(flower.position);
        const influence = Math.max(0, 1 - (distanceToMouse / settings.cubes.mouseRange)) * settings.cubes.mouseInfluence;
        flower.rotation.x += flower.rotationSpeed.x + (mouseY * influence * 0.05);
        flower.rotation.y += flower.rotationSpeed.y + (mouseX * influence * 0.05);
        flower.rotation.z += flower.rotationSpeed.z;
    });
    if (window.animatedText) window.animatedText.forEach(text => text.update());
    composer.render();
    stats.end();
}

function setupEventListeners() {
    camera.position.z = 15;
    document.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        mouseX = mouse.x;
        mouseY = mouse.y;
        raycaster.setFromCamera(mouse, camera);
    });
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        composer.setSize(width, height);
        bokehPass.setSize(width, height);
        respawnFlowers();
    });
}

setupScene();
setupEventListeners();
animate();


