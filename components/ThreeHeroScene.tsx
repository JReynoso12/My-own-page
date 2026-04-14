"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Silk colors — bright enough to read as real webs on dark bg */
const WEB_SILK = 0xc5d0e0;
const RING_SILK = 0xe8eef5;
const SILK_THREAD = 0xd8e0ec;
const SPIDER_BODY = 0x0a0a0a;

/**
 * Spider-Man / comic-book web (not a real orb-weaver capture spiral):
 * - straight radials from the hub
 * - concentric polygon rings — trapezoid “cells” like classic Spidey shots
 */
function buildSpidermanWebSplit(
  maxR: number,
  radialCount: number,
  ringCount: number,
  z: number
): { radialPart: number[]; ringPart: number[] } {
  const radialPart: number[] = [];
  const ringPart: number[] = [];
  const pushSeg = (
    arr: number[],
    ax: number,
    ay: number,
    az: number,
    bx: number,
    by: number,
    bz: number
  ) => {
    arr.push(ax, ay, az, bx, by, bz);
  };

  for (let j = 0; j < radialCount; j++) {
    const theta = (j / radialCount) * Math.PI * 2;
    pushSeg(radialPart, 0, 0, z, maxR * Math.cos(theta), maxR * Math.sin(theta), z);
  }

  for (let k = 1; k <= ringCount; k++) {
    const r = (k / ringCount) * maxR;
    for (let j = 0; j < radialCount; j++) {
      const t1 = (j / radialCount) * Math.PI * 2;
      const t2 = ((j + 1) / radialCount) * Math.PI * 2;
      pushSeg(
        ringPart,
        r * Math.cos(t1),
        r * Math.sin(t1),
        z,
        r * Math.cos(t2),
        r * Math.sin(t2),
        z
      );
    }
  }

  return { radialPart, ringPart };
}

function makeSpider(mat: THREE.MeshBasicMaterial): THREE.Group {
  const root = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 10), mat);
  root.add(body);
  const legGeo = new THREE.BoxGeometry(0.09, 0.01, 0.01);
  for (let i = 0; i < 8; i++) {
    const leg = new THREE.Mesh(legGeo, mat);
    const ang = (i / 8) * Math.PI * 2;
    leg.position.set(Math.cos(ang) * 0.055, -0.015, Math.sin(ang) * 0.055);
    leg.rotation.y = ang;
    leg.rotation.z = Math.PI / 2.8;
    root.add(leg);
  }
  return root;
}

interface SpiderState {
  group: THREE.Group;
  silk: THREE.Line;
  body: THREE.Group;
  r: number;
  theta: number;
  drift: number;
  bobPhase: number;
  speed: number;
  ringDrift: number;
}

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
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.set(0, 0.2, 6.2);

    const radialMat = new THREE.LineBasicMaterial({
      color: WEB_SILK,
      transparent: true,
      opacity: 0.62,
    });
    const ringMat = new THREE.LineBasicMaterial({
      color: RING_SILK,
      transparent: true,
      opacity: 0.58,
    });
    const silkMat = new THREE.LineBasicMaterial({
      color: SILK_THREAD,
      transparent: true,
      opacity: 0.62,
    });
    const spiderMat = new THREE.MeshBasicMaterial({ color: SPIDER_BODY });

    const webs: THREE.Group[] = [];

    const addOrbWeb = (opts: {
      scale: number;
      position: THREE.Vector3;
      rotation: THREE.Euler;
      maxR: number;
      radials: number;
      rings: number;
    }) => {
      const { radialPart, ringPart } = buildSpidermanWebSplit(
        opts.maxR,
        opts.radials,
        opts.rings,
        0
      );

      const radialGeo = new THREE.BufferGeometry();
      radialGeo.setAttribute("position", new THREE.Float32BufferAttribute(radialPart, 3));
      const ringGeo = new THREE.BufferGeometry();
      ringGeo.setAttribute("position", new THREE.Float32BufferAttribute(ringPart, 3));

      const g = new THREE.Group();
      g.add(new THREE.LineSegments(radialGeo, radialMat));
      g.add(new THREE.LineSegments(ringGeo, ringMat));
      g.scale.setScalar(opts.scale);
      g.position.copy(opts.position);
      g.rotation.copy(opts.rotation);
      scene.add(g);
      webs.push(g);
      return g;
    };

    addOrbWeb({
      scale: 1,
      position: new THREE.Vector3(1.35, 0.08, -0.85),
      rotation: new THREE.Euler(0.16, -0.32, 0.06),
      maxR: 3.25,
      radials: 16,
      rings: 10,
    });
    addOrbWeb({
      scale: 0.64,
      position: new THREE.Vector3(-2.15, 0.55, -1.55),
      rotation: new THREE.Euler(-0.1, 0.52, -0.04),
      maxR: 3.1,
      radials: 14,
      rings: 9,
    });
    addOrbWeb({
      scale: 0.5,
      position: new THREE.Vector3(2.55, -0.85, -1.95),
      rotation: new THREE.Euler(0.2, 0.18, 0.1),
      maxR: 2.9,
      radials: 12,
      rings: 8,
    });

    const spiders: SpiderState[] = [];
    const mainWeb = webs[0]!;

    const spawnSpider = (r: number, theta: number, drift: number, speed: number) => {
      const group = new THREE.Group();
      mainWeb.add(group);

      const silkGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, -0.42, 0),
      ]);
      const silk = new THREE.Line(silkGeo, silkMat);
      group.add(silk);

      const body = makeSpider(spiderMat);
      body.position.set(0, -0.42, 0);
      group.add(body);

      group.position.set(r * Math.cos(theta), r * Math.sin(theta), 0);

      spiders.push({
        group,
        silk,
        body,
        r,
        theta,
        drift,
        bobPhase: Math.random() * Math.PI * 2,
        speed,
        ringDrift: (Math.random() - 0.5) * 0.15,
      });
    };

    spawnSpider(1.1, 0.4, 0.02, 0.35);
    spawnSpider(1.8, 2.1, -0.015, 0.28);
    spawnSpider(2.4, 4.5, 0.025, 0.4);
    spawnSpider(0.65, 5.8, -0.02, 0.32);
    spawnSpider(2.0, 3.2, 0.018, 0.38);

    let mx = 0;
    let my = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      my = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    parent.addEventListener("mousemove", handleMouseMove);

    let t = 0;
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      t += 0.016;

      webs[0]!.rotation.z = Math.sin(t * 0.32) * 0.022;
      webs[1]!.rotation.z = Math.sin(t * 0.26 + 1) * 0.028;
      webs[2]!.rotation.z = Math.sin(t * 0.38 + 2) * 0.024;

      for (const s of spiders) {
        s.theta += s.drift * 0.008;
        s.r += Math.sin(t * s.speed + s.bobPhase) * 0.0008 + s.ringDrift * 0.001;
        s.r = Math.max(0.35, Math.min(2.85, s.r));

        const bob = Math.sin(t * 2.2 + s.bobPhase) * 0.045;
        const sway = Math.sin(t * 1.7 + s.bobPhase * 1.3) * 0.028;
        const swayZ = Math.cos(t * 1.5 + s.bobPhase) * 0.022;

        s.group.position.set(
          s.r * Math.cos(s.theta) + sway,
          s.r * Math.sin(s.theta) + swayZ,
          bob * 0.5
        );

        const hang = 0.38 + Math.sin(t * 3 + s.bobPhase) * 0.04;
        s.body.position.set(0, -hang, 0);
        const silkPos = s.silk.geometry.attributes.position;
        const silkArr = silkPos.array as Float32Array;
        silkArr[4] = -hang;
        silkPos.needsUpdate = true;

        s.body.rotation.z = Math.sin(t * 2.5 + s.bobPhase) * 0.35;
        s.body.rotation.x = Math.sin(t * 1.8 + s.bobPhase) * 0.12;
      }

      camera.position.x += (mx * 0.55 - camera.position.x) * 0.035;
      camera.position.y += (my * 0.38 - camera.position.y) * 0.035;
      camera.lookAt(0.8, 0, 0);

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
      radialMat.dispose();
      ringMat.dispose();
      silkMat.dispose();
      spiderMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
