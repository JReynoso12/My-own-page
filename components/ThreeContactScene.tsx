"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeContactScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement!;
    const w = parent.offsetWidth;
    const h = parent.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 5;

    const accent = 0xe50914;

    // Lighter particle field
    const pcount = 900;
    const pos = new Float32Array(pcount * 3);
    for (let i = 0; i < pcount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 14;
      pos[i + 1] = (Math.random() - 0.5) * 8;
      pos[i + 2] = (Math.random() - 0.5) * 6;
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(
      pg,
      new THREE.PointsMaterial({ color: accent, size: 0.03, transparent: true, opacity: 0.6 })
    );
    scene.add(pts);

    // Counter-rotating ring 1
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.01, 6, 64),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.2 })
    );
    ring.rotation.x = 0.5;
    scene.add(ring);

    // Counter-rotating ring 2
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.1, 0.008, 6, 48),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.15 })
    );
    ring2.rotation.x = -0.8;
    ring2.rotation.y = 0.4;
    scene.add(ring2);

    let t = 0;
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      t += 0.006;
      pts.rotation.y = t * 0.05;
      ring.rotation.z = t * 0.2;
      ring2.rotation.z = -t * 0.15;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = parent.offsetWidth;
      const nh = parent.offsetHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
}
