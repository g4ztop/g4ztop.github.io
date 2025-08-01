import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import type { MetallicTextProps } from '../types';

// Letter geometry mapping for better performance
const LETTER_GEOMETRIES: Record<string, [number, number, number]> = {
  ' ': [1, 0.1, 0.1],
  'M': [2, 4, 1],
  'i': [0.8, 3, 1],
  't': [1.2, 3.5, 1],
  'c': [1.5, 3, 1],
  'h': [1.5, 4, 1],
  'e': [1.5, 3, 1],
  'l': [0.8, 4, 1],
  'C': [2, 4, 1],
  'r': [1.2, 3, 1],
  'a': [1.5, 3, 1],
  'f': [1.2, 4, 1],
  'I': [0.8, 4, 1],
  'N': [1.5, 4, 1],
  'W': [2, 4, 1],
  'O': [1.5, 3, 1],
  'K': [1.2, 4, 1],
  'S': [1.5, 3, 1],
};

// Throttle function for mouse events
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

const MetallicText: React.FC<MetallicTextProps> = ({ text, className = '', onClick }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isThreeJSReady, setIsThreeJSReady] = useState(false);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const textGroupRef = useRef<THREE.Group | null>(null);
  const lightsRef = useRef<THREE.PointLight[]>([]);

  // Memoized mouse position to reduce re-renders
  const mousePosition = useRef({ x: 0, y: 0 });

  // Optimized mouse handler with throttling
  const handleMouseMove = useCallback(throttle((event: MouseEvent) => {
    const container = mountRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect) {
      mousePosition.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mousePosition.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }
  }, 16), []); // 60fps throttle

  // Memoized letter geometries with better caching
  const letterGeometries = useMemo(() => {
    const letters = text.split('');
    const letterSpacing = 2.5;
    const startX = -(letters.length - 1) * letterSpacing / 2;
    
    return letters.map((letter, index) => {
      const [width, height, depth] = LETTER_GEOMETRIES[letter] || [1.5, 3, 1];
      return {
        letter,
        geometry: new THREE.BoxGeometry(width, height, depth),
        position: startX + index * letterSpacing
      };
    });
  }, [text]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Get container dimensions
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 100;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    rendererRef.current = renderer;
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Create text group
    const textGroup = new THREE.Group();
    textGroupRef.current = textGroup;
    
    // Create letters with memoized geometries
    letterGeometries.forEach(({ geometry, position }) => {
      const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.8,
        roughness: 0.2,
        envMapIntensity: 1.5,
      });
      
      const letterMesh = new THREE.Mesh(geometry, material);
      letterMesh.position.x = position;
      letterMesh.castShadow = true;
      letterMesh.receiveShadow = true;
      textGroup.add(letterMesh);
    });
    
    scene.add(textGroup);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(15, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024; // Reduced for performance
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Point lights for dynamic lighting
    const lights = [
      new THREE.PointLight(0x00ffff, 5, 100),
      new THREE.PointLight(0xff00ff, 5, 100),
      new THREE.PointLight(0xffff00, 4, 80),
      new THREE.PointLight(0xffffff, 3, 60)
    ];
    lightsRef.current = lights;

    lights.forEach((light, index) => {
      const positions = [
        [-15, 10, 15],
        [15, -10, -15],
        [0, 20, 0],
        [0, 0, 20]
      ] as const;
      const [x, y, z] = positions[index];
      light.position.set(x, y, z);
      scene.add(light);
    });

    // Add mouse event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop with performance optimization
    let lastTime = 0;
    const animate = (currentTime: number) => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Limit frame rate for better performance
      if (currentTime - lastTime < 16) return; // ~60fps
      lastTime = currentTime;

      if (textGroup) {
        // Rotate text group based on mouse position
        textGroup.rotation.x = -mousePosition.current.y * 0.1;
        textGroup.rotation.y = mousePosition.current.x * 0.1;

        // Floating animation
        textGroup.position.y = Math.sin(currentTime * 0.001) * 2;

        // Rotate lights for dynamic lighting
        const time = currentTime * 0.001;
        lights[0].position.x = Math.cos(time) * 15;
        lights[0].position.z = Math.sin(time) * 15;
        
        lights[1].position.x = Math.cos(time + Math.PI) * 15;
        lights[1].position.z = Math.sin(time + Math.PI) * 15;

        lights[2].position.x = Math.sin(time * 0.5) * 10;
        lights[2].position.z = Math.cos(time * 0.5) * 10;

        lights[3].position.x = Math.cos(time * 0.3) * 8;
        lights[3].position.y = Math.sin(time * 0.3) * 8;
      }

      renderer.render(scene, camera);
    };

    animate(0);
    setIsThreeJSReady(true);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      if (renderer) {
        renderer.dispose();
      }
      
      if (scene) {
        scene.clear();
      }
      
      // Dispose of geometries and materials
      letterGeometries.forEach(({ geometry }) => {
        geometry.dispose();
      });
      
      // Clear refs
      sceneRef.current = null;
      rendererRef.current = null;
      textGroupRef.current = null;
      lightsRef.current = [];
      setIsThreeJSReady(false);
    };
  }, [text, letterGeometries, handleMouseMove]);

  return (
    <div 
      ref={mountRef} 
      className={`inline-block relative mx-auto lg:mx-0 ${className} ${onClick ? 'cursor-pointer' : ''}`}
      style={{ width: '400px', height: '120px' }}
      onClick={onClick}
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