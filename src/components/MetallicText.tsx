import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface MetallicTextProps {
  text: string;
  className?: string;
}

const MetallicText: React.FC<MetallicTextProps> = ({ text, className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Get container dimensions
    const container = mountRef.current;
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 100;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Create metallic material with better properties
    const metallicMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1.0,
    });

    // Create a group to hold multiple geometric shapes for text effect
    const textGroup = new THREE.Group();
    scene.add(textGroup);

    // Create multiple layers for a more complex metallic effect
    const layers = [
      { geometry: new THREE.BoxGeometry(20, 8, 3), material: metallicMaterial, z: 0 },
      { geometry: new THREE.BoxGeometry(18, 6, 1), material: new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.7, roughness: 0.2 }), z: 2 },
      { geometry: new THREE.BoxGeometry(16, 4, 0.5), material: new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.8, roughness: 0.1 }), z: 3.5 }
    ];

    layers.forEach(({ geometry, material, z }) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = z;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      textGroup.add(mesh);
    });

    // Add lights with better positioning
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(15, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 1.5, 100);
    pointLight1.position.set(-15, 10, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 1.5, 100);
    pointLight2.position.set(15, -10, -15);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffff00, 1, 80);
    pointLight3.position.set(0, 20, 0);
    scene.add(pointLight3);

    // Position camera
    camera.position.z = 35;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect) {
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate text group based on mouse position
      textGroup.rotation.x = mousePosition.y * 0.3;
      textGroup.rotation.y = mousePosition.x * 0.3;

      // Add some subtle floating animation
      textGroup.position.y = Math.sin(Date.now() * 0.001) * 1.5;

      // Rotate lights for dynamic lighting
      const time = Date.now() * 0.001;
      pointLight1.position.x = Math.cos(time) * 20;
      pointLight1.position.z = Math.sin(time) * 20;
      
      pointLight2.position.x = Math.cos(time + Math.PI) * 20;
      pointLight2.position.z = Math.sin(time + Math.PI) * 20;

      pointLight3.position.x = Math.sin(time * 0.5) * 10;
      pointLight3.position.z = Math.cos(time * 0.5) * 10;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth || 300;
      const newHeight = container.clientHeight || 100;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [text, mousePosition]);

  return (
    <div 
      ref={mountRef} 
      className={`inline-block ${className}`}
      style={{ width: '300px', height: '100px' }}
    />
  );
};

export default MetallicText; 