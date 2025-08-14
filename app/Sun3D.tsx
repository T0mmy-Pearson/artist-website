"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Sun3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const globeTextures = [
      "/imagees/Globe/Green.JPG",
      "/imagees/Globe/Pink.jpg",
      "/imagees/Globe/Purple.JPG",
      "/imagees/Globe/Lilac.JPG"
    ];
    // Pick a random texture on each load
    const randomIndex = Math.floor(Math.random() * globeTextures.length);

  // Use const for variables that are never reassigned

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0xffffff, 1);
    const mountNode = mountRef.current;
    if (mountNode) {
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight, false);
      mountNode.appendChild(renderer.domElement);
    }

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(globeTextures[randomIndex]);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
  sphere.rotation.y += 0.001;
  sphere.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

  window.addEventListener('resize', handleResize);
  handleResize();

    // Cleanup
    return () => {
      renderer.dispose();
      if (mountNode) mountNode.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100%", height: "100%", position: "relative", maxWidth: "100vw", maxHeight: "100vh" }} />
  );
};

export default Sun3D;
