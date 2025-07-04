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
    container.appendChild(renderer.domElement);

    // Create a simple metallic cube
    const geometry = new THREE.BoxGeometry(10, 6, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
    });
    
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 1, 100);
    pointLight1.position.set(-10, 5, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 1, 100);
    pointLight2.position.set(10, -5, -10);
    scene.add(pointLight2);

    // Position camera
    camera.position.z = 20;

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

      // Rotate cube based on mouse position
      cube.rotation.x = mousePosition.y * 0.5;
      cube.rotation.y = mousePosition.x * 0.5;

      // Add some subtle floating animation
      cube.position.y = Math.sin(Date.now() * 0.001) * 2;

      // Rotate lights for dynamic lighting
      const time = Date.now() * 0.001;
      pointLight1.position.x = Math.cos(time) * 15;
      pointLight1.position.z = Math.sin(time) * 15;
      
      pointLight2.position.x = Math.cos(time + Math.PI) * 15;
      pointLight2.position.z = Math.sin(time + Math.PI) * 15;

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