"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroScene() {
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
    camera.position.set(0, 0, 5);

    const gold = 0xe8c96a;

    // Wireframe torus knot — the signature centerpiece
    const tkg = new THREE.TorusKnotGeometry(1.5, 0.45, 128, 16, 2, 3);
    const tkwire = new THREE.WireframeGeometry(tkg);
    const tk = new THREE.LineSegments(
      tkwire,
      new THREE.LineBasicMaterial({ color: gold, opacity: 0.22, transparent: true })
    );
    tk.position.set(2.2, 0, 0);
    scene.add(tk);

    // Inner solid (subtle depth fill)
    const tksolid = new THREE.Mesh(
      tkg,
      new THREE.MeshBasicMaterial({ color: 0x1a1608, transparent: true, opacity: 0.7 })
    );
    tksolid.position.set(2.2, 0, 0);
    scene.add(tksolid);

    // Floating icosahedron
    const ig = new THREE.IcosahedronGeometry(0.7, 1);
    const iwire = new THREE.WireframeGeometry(ig);
    const ico = new THREE.LineSegments(
      iwire,
      new THREE.LineBasicMaterial({ color: gold, opacity: 0.35, transparent: true })
    );
    ico.position.set(-2.5, 1.2, -1);
    scene.add(ico);

    // Small octahedron
    const og = new THREE.OctahedronGeometry(0.4, 0);
    const owire = new THREE.WireframeGeometry(og);
    const oct = new THREE.LineSegments(
      owire,
      new THREE.LineBasicMaterial({ color: gold, opacity: 0.4, transparent: true })
    );
    oct.position.set(-1.8, -1.5, 0);
    scene.add(oct);

    // 1800 floating gold particles
    const pcount = 1800;
    const pos = new Float32Array(pcount * 3);
    for (let i = 0; i < pcount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 16;
      pos[i + 1] = (Math.random() - 0.5) * 10;
      pos[i + 2] = (Math.random() - 0.5) * 8;
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(
      pg,
      new THREE.PointsMaterial({ color: gold, size: 0.025, transparent: true, opacity: 0.55 })
    );
    scene.add(pts);

    // Gyroscopic gold ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.012, 6, 80),
      new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.18 })
    );
    ring.rotation.x = Math.PI / 2.5;
    ring.position.set(2.2, 0, 0);
    scene.add(ring);

    // Mouse tracking for subtle camera follow
    let mx = 0;
    let my = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 2 - 1;
      my = -((e.clientY - r.top) / r.height) * 2 + 1;
    };
    parent.addEventListener("mousemove", handleMouseMove);

    let t = 0;
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      t += 0.008;
      tk.rotation.x = t * 0.4;
      tk.rotation.y = t * 0.6;
      tksolid.rotation.x = t * 0.4;
      tksolid.rotation.y = t * 0.6;
      ring.rotation.z = t * 0.25;
      ico.rotation.x = t * 0.5;
      ico.rotation.y = t * 0.3;
      oct.rotation.x = -t * 0.7;
      oct.rotation.y = t * 0.5;
      pts.rotation.y = t * 0.04;
      camera.position.x += (mx * 0.4 - camera.position.x) * 0.04;
      camera.position.y += (my * 0.3 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
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
      parent.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
