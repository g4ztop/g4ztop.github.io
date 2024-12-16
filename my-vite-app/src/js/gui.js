import * as dat from 'dat.gui';
import { FogExp2, Color } from 'three';

export class GUI {
    constructor(scene, settings, flowers, bokehPass, respawnFlowers) {
        this.gui = new dat.GUI();
        this.scene = scene;
        this.settings = settings;
        this.flowers = flowers;
        this.bokehPass = bokehPass;
        this.respawnFlowers = respawnFlowers;
    }

    setupGUI() {
        this.setupFogFolder();
        this.setupGradientFolder();
        this.setupFlowersFolder();
        this.setupDOFFolder();
    }

    setupFogFolder() {
        const fogFolder = this.gui.addFolder('Fog');
        fogFolder.add(this.settings.fog, 'enabled').onChange(() => {
            this.scene.fog = this.settings.fog.enabled ?
                new FogExp2(new Color(this.settings.fog.color), this.settings.fog.density) : null;
        });
        fogFolder.addColor(this.settings.fog, 'color');
        fogFolder.add(this.settings.fog, 'density', 0, 0.1).step(0.001);
    }

    setupGradientFolder() {
        const gradientFolder = this.gui.addFolder('Background Gradient');
        
        gradientFolder.addColor(this.settings.gradient, 'topColor').onChange(value => {
            this.scene.children[0].material.uniforms.topColor.value.set(value);
        });
        gradientFolder.addColor(this.settings.gradient, 'bottomColor').onChange(value => {
            this.scene.children[0].material.uniforms.bottomColor.value.set(value);
        });
        gradientFolder.add(this.settings.gradient, 'offset', 0, 5).onChange(value => {
            this.scene.children[0].material.uniforms.offset.value = value;
        });
        gradientFolder.add(this.settings.gradient, 'exponent', 0, 2).onChange(value => {
            this.scene.children[0].material.uniforms.exponent.value = value;
        });
    
        const starFieldFolder = gradientFolder.addFolder('Star Field');
    
        starFieldFolder.add(this.settings.gradient.starField, 'density', 0.1, 10)
            .onChange(value => {
                this.scene.children[0].material.uniforms.starDensity.value = value;
            });
    
        starFieldFolder.add(this.settings.gradient.starField, 'brightness', 0.01, 2)
            .onChange(value => {
                this.scene.children[0].material.uniforms.starBrightness.value = value;
            });
    
        starFieldFolder.add(this.settings.gradient.starField, 'size', 0.01, 0.2)
            .onChange(value => {
                this.scene.children[0].material.uniforms.starSize.value = value;
            });
    
        starFieldFolder.add(this.settings.gradient.starField, 'flickerSpeed', 0.1, 2)
            .onChange(value => {
                this.scene.children[0].material.uniforms.flickerSpeed.value = value;
            });
    }

    setupFlowersFolder() {
        const flowerFolder = this.gui.addFolder('Flowers');
        flowerFolder.add(this.settings.cubes, 'count', 1, 200).onChange(this.respawnFlowers);
        flowerFolder.add(this.settings.cubes, 'size', 0.1, 2.0).onChange(this.respawnFlowers);
        flowerFolder.add(this.settings.cubes, 'minDistance', 0, 2).onChange(this.respawnFlowers);
        flowerFolder.add(this.settings.cubes, 'paddingX', 0, 1).name('X Padding').onChange(this.respawnFlowers);
        flowerFolder.add(this.settings.cubes, 'paddingY', 0, 1).name('Y Padding').onChange(this.respawnFlowers);
        flowerFolder.add(this.settings.cubes, 'centerClearance', 0, 5).name('Center Clearance').onChange(this.respawnFlowers);
        flowerFolder.add(this.settings.cubes.spawnDepth, 'min', 0, 99).onChange(this.respawnFlowers);
        flowerFolder.add(this.settings.cubes.spawnDepth, 'max', 1, 100).onChange(this.respawnFlowers);
        flowerFolder.add(this.settings.cubes, 'rotationSpeed', 0, 0.1).name('Base Rotation Speed');
        flowerFolder.add(this.settings.cubes, 'mouseInfluence', 0, 2).name('Mouse Influence');
        flowerFolder.add(this.settings.cubes, 'mouseRange', 1, 20).name('Mouse Range');
    }

    setupDOFFolder() {
        const dofFolder = this.gui.addFolder('Depth of Field');
        dofFolder.add(this.settings.dof, 'focus', 0, 50).onChange(value => {
            this.bokehPass.uniforms['focus'].value = value;
        });
        dofFolder.add(this.settings.dof, 'aperture', 0.0001, 0.01).step(0.0001).onChange(value => {
            this.bokehPass.uniforms['aperture'].value = value;
        });
        dofFolder.add(this.settings.dof, 'maxblur', 0, 0.01).step(0.0001).onChange(value => {
            this.bokehPass.uniforms['maxblur'].value = value;
        });
    }

    setupLightingFolder(ambientLight, spotlight1, spotlight2, spotlight3, spotlightHelper3, pointLight) {
        const lightingFolder = this.gui.addFolder('Lighting');
        
        const ambientFolder = lightingFolder.addFolder('Ambient Light');
        ambientFolder.addColor(this.settings.lighting.ambient, 'color').onChange(value => {
            ambientLight.color.set(value);
        });
        ambientFolder.add(this.settings.lighting.ambient, 'intensity', 0, 10).onChange(value => {
            ambientLight.intensity = value;
        });
    
        const spot1Folder = lightingFolder.addFolder('Spotlight 1');
        spot1Folder.addColor(this.settings.lighting.rect1, 'color').onChange(value => {
            spotlight1.color.set(value);
            spotlight1.helper && spotlight1.helper.update();
        });
        spot1Folder.add(spotlight1.position, 'x', -50, 50).name('Position X');
        spot1Folder.add(spotlight1.position, 'y', -50, 50).name('Position Y');
        spot1Folder.add(spotlight1.position, 'z', -50, 50).name('Position Z');
        spot1Folder.add(spotlight1.target.position, 'x', -50, 50).name('Target X');
        spot1Folder.add(spotlight1.target.position, 'y', -50, 50).name('Target Y');
        spot1Folder.add(spotlight1.target.position, 'z', -50, 50).name('Target Z');
        spot1Folder.add(spotlight1, 'intensity', 0, 10000).name('Intensity');
        spot1Folder.add(spotlight1, 'angle', 0, Math.PI / 2).name('Angle');
        spot1Folder.add(spotlight1, 'penumbra', 0, 1).name('Penumbra');
        spot1Folder.add(spotlight1, 'decay', 0, 10).name('Decay');
        spot1Folder.add(spotlight1, 'distance', 0, 200).name('Distance');

        const spot2Folder = lightingFolder.addFolder('Spotlight 2');
        spot2Folder.addColor(this.settings.lighting.rect2, 'color').onChange(value => {
            spotlight2.color.set(value);
            spotlight2.helper && spotlight2.helper.update();
        });
        spot2Folder.add(spotlight2.position, 'x', -50, 50).name('Position X');
        spot2Folder.add(spotlight2.position, 'y', -50, 50).name('Position Y');
        spot2Folder.add(spotlight2.position, 'z', -50, 50).name('Position Z');
        spot2Folder.add(spotlight2.target.position, 'x', -50, 50).name('Target X');
        spot2Folder.add(spotlight2.target.position, 'y', -50, 50).name('Target Y');
        spot2Folder.add(spotlight2.target.position, 'z', -50, 50).name('Target Z');
        spot2Folder.add(spotlight2, 'intensity', 0, 10000).name('Intensity');
        spot2Folder.add(spotlight2, 'angle', 0, Math.PI / 2).name('Angle');
        spot2Folder.add(spotlight2, 'penumbra', 0, 1).name('Penumbra');
        spot2Folder.add(spotlight2, 'decay', 0, 10).name('Decay');
        spot2Folder.add(spotlight2, 'distance', 0, 200).name('Distance');
        const spot3Folder = lightingFolder.addFolder('Spotlight 3');
        spot3Folder.addColor(this.settings.lighting.spot3, 'color').onChange(value => {
            spotlight3.color.set(value);
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3.position, 'x', -50, 50).name('Position X').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3.position, 'y', -50, 50).name('Position Y').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3.position, 'z', -50, 50).name('Position Z').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3.target.position, 'x', -50, 50).name('Target X').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3.target.position, 'y', -50, 50).name('Target Y').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3.target.position, 'z', -50, 50).name('Target Z').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3, 'intensity', 0, 10000).name('Intensity').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3, 'angle', 0, Math.PI / 2).name('Angle').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3, 'penumbra', 0, 1).name('Penumbra').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3, 'decay', 0, 10).name('Decay').onChange(() => {
            spotlightHelper3.update();
        });
        spot3Folder.add(spotlight3, 'distance', 0, 200).name('Distance').onChange(() => {
            spotlightHelper3.update();
        });

        const pointLightFolder = lightingFolder.addFolder('Point Light');
        pointLightFolder.addColor(this.settings.lighting.point, 'color').onChange(value => {
            pointLight.color.set(value);
        });
        pointLightFolder.add(pointLight.position, 'x', -50, 50).name('Position X');
        pointLightFolder.add(pointLight.position, 'y', -50, 50).name('Position Y');
        pointLightFolder.add(pointLight.position, 'z', -50, 50).name('Position Z');
        pointLightFolder.add(pointLight, 'intensity', 0, 10000).name('Intensity');
        pointLightFolder.add(pointLight, 'distance', 0, 200).name('Distance');
        pointLightFolder.add(pointLight, 'decay', 0, 10).name('Decay');
    }

    setupTextFolder(textSettings, updateTextScale) {
        const textFolder = this.gui.addFolder('Text');
        textFolder.add(textSettings, 'textScale', 0.001, 1).step(0.001).onChange(updateTextScale);
        textFolder.add(textSettings, 'mouseRotationInfluence', 0, 1).step(0.01);
        textFolder.add(textSettings, 'textDistance', 0.001, 10).step(0.001).onChange(updateTextScale);
}
}
