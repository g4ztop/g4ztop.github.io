import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface MetallicTextProps {
  text: string;
  className?: string;
}

const MetallicText: React.FC<MetallicTextProps> = ({ text, className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isThreeJSReady, setIsThreeJSReady] = useState(false);

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

    // Create a larger metallic cube with better material
    const geometry = new THREE.BoxGeometry(15, 9, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.2,
      envMapIntensity: 1.5,
    });
    
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // Much brighter lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(15, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 5, 100);
    pointLight1.position.set(-15, 10, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 5, 100);
    pointLight2.position.set(15, -10, -15);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffff00, 4, 80);
    pointLight3.position.set(0, 20, 0);
    scene.add(pointLight3);

    // Add a fourth bright white light for extra illumination
    const pointLight4 = new THREE.PointLight(0xffffff, 3, 60);
    pointLight4.position.set(0, 0, 20);
    scene.add(pointLight4);

    // Position camera
    camera.position.z = 25;

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

      // Rotate cube based on mouse position with reduced sensitivity
      cube.rotation.x = mousePosition.y * 0.2;
      cube.rotation.y = mousePosition.x * 0.2;

      // Add some subtle floating animation
      cube.position.y = Math.sin(Date.now() * 0.001) * 2;

      // Rotate lights for dynamic lighting
      const time = Date.now() * 0.001;
      pointLight1.position.x = Math.cos(time) * 15;
      pointLight1.position.z = Math.sin(time) * 15;
      
      pointLight2.position.x = Math.cos(time + Math.PI) * 15;
      pointLight2.position.z = Math.sin(time + Math.PI) * 15;

      pointLight3.position.x = Math.sin(time * 0.5) * 10;
      pointLight3.position.z = Math.cos(time * 0.5) * 10;

      pointLight4.position.x = Math.cos(time * 0.3) * 8;
      pointLight4.position.y = Math.sin(time * 0.3) * 8;

      renderer.render(scene, camera);
    };

    // Start animation and mark Three.js as ready
    animate();
    setIsThreeJSReady(true);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      setIsThreeJSReady(false);
    };
  }, [text, mousePosition]);

  return (
    <div 
      ref={mountRef} 
      className={`inline-block relative ${className}`}
      style={{ width: '300px', height: '100px' }}
    >
      {!isThreeJSReady && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          {text}
        </div>
      )}
    </div>
  );
};

export default MetallicText; 