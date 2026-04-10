"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCardScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.cssText = "width:100%;height:100%";
    container.innerHTML = "";
    container.appendChild(canvas);

    const w = container.offsetWidth || 320;
    const h = 180;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setClearColor(0x0c0c20, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 50);
    camera.position.z = 3.5;

    const gold = 0xe8c96a;

    // Spinning icosahedron wireframe
    const g = new THREE.IcosahedronGeometry(0.9, 1);
    const wire = new THREE.WireframeGeometry(g);
    const mesh = new THREE.LineSegments(
      wire,
      new THREE.LineBasicMaterial({ color: gold, opacity: 0.5, transparent: true })
    );
    scene.add(mesh);

    const solid = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x080812 }));
    scene.add(solid);

    // Small particle field
    const pcount = 300;
    const pos = new Float32Array(pcount * 3);
    for (let i = 0; i < pcount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 8;
      pos[i + 1] = (Math.random() - 0.5) * 5;
      pos[i + 2] = (Math.random() - 0.5) * 4;
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    scene.add(
      new THREE.Points(
        pg,
        new THREE.PointsMaterial({ color: gold, size: 0.03, transparent: true, opacity: 0.4 })
      )
    );

    let t = 0;
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      t += 0.01;
      mesh.rotation.x = t * 0.4;
      mesh.rotation.y = t * 0.5;
      solid.rotation.x = t * 0.4;
      solid.rotation.y = t * 0.5;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[180px] bg-[#0c0c20] flex items-center justify-center border border-[#1a1a30]"
    />
  );
}
