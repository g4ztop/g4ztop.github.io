import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

export class LightingSystem {
    constructor(scene, settings, gui) {
        this.scene = scene;
        this.settings = settings;
        this.gui = gui;
        this.lights = {};

        RectAreaLightUniformsLib.init();
        this.setupLights();
    }

    setupLights() {
        this.createAmbientLight();
        this.createPointLight();
        this.createSpotLights();
        this.setupHelpers();
        this.updateSettingsWithPointLight();
        this.setupGUIControls();
    }

    createAmbientLight() {
        this.lights.ambient = new THREE.AmbientLight(
            this.settings.lighting.ambient.color,
            this.settings.lighting.ambient.intensity
        );
        this.scene.add(this.lights.ambient);
    }

    createPointLight() {
        this.lights.point = new THREE.PointLight(0xffffff, 1, 100);
        this.lights.point.position.set(0, 7, 33);
        this.lights.point.intensity = 5000;
        this.scene.add(this.lights.point);
    }

    createSpotLights() {
        const spotLightSettings = [
            { color: this.settings.lighting.rect1.color, position: [20, 0, -7] },
            { color: this.settings.lighting.rect2.color, position: [-20, 0, -7] },
            { color: this.settings.lighting.spot3.color, position: [0, 7.4, -21], distance: 200, intensity: 100000 }
        ];

        spotLightSettings.forEach((settings, index) => {
            const spotLight = new THREE.SpotLight(settings.color, settings.intensity || 6411);
            spotLight.position.set(...settings.position);
            spotLight.angle = Math.PI / 1.5;
            spotLight.penumbra = 0.1;
            spotLight.decay = 2;
            spotLight.distance = settings.distance || 25;
            this.scene.add(spotLight);
            this.scene.add(spotLight.target);
            this.lights[`spot${index + 1}`] = spotLight;
        });
    }

    setupHelpers() {
        ['spot1', 'spot2', 'spot3'].forEach(spot => {
            this.lights[`${spot}Helper`] = new THREE.SpotLightHelper(this.lights[spot]);
            this.scene.add(this.lights[`${spot}Helper`]);
            this.lights[`${spot}Helper`].visible = false;
        });
    }

    updateSettingsWithPointLight() {
        this.settings.lighting.point = {
            color: '#ffffff',
            intensity: 1555,
            distance: 18
        };
    }

    setupGUIControls() {
        if (this.gui) {
            this.gui.setupLightingFolder(
                this.lights.ambient,
                this.lights.spot1,
                this.lights.spot2,
                this.lights.spot3,
                this.lights.spot3Helper,
                this.lights.point
            );
        }
    }

    updateLights(newSettings) {
        this.settings = newSettings;
        // Add any necessary light update logic here
    }

    toggleHelpers(visible) {
        ['spot1Helper', 'spot2Helper', 'spot3Helper'].forEach(helper => {
            this.lights[helper].visible = visible;
        });
    }
}
