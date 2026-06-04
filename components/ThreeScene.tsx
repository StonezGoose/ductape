"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Double-ended spike (biconical crystal shard) ─────────── */
function Spike({
  position,
  rotation,
  length,
  radius,
  opacity,
  rotationSpeed,
  driftFreq,
  driftAmp,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  length: number;
  radius: number;
  opacity: number;
  rotationSpeed: [number, number, number];
  driftFreq: number;
  driftAmp: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const bx = position[0], by = position[1], bz = position[2];

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.x += rotationSpeed[0];
    ref.current.rotation.y += rotationSpeed[1];
    ref.current.rotation.z += rotationSpeed[2];
    ref.current.position.x = bx + Math.sin(t * driftFreq * 0.7) * driftAmp;
    ref.current.position.y = by + Math.sin(t * driftFreq) * driftAmp;
    ref.current.position.z = bz;
  });

  const half = length / 2;
  const segs = 6; // hexagonal cross-section — crystal look

  return (
    <group ref={ref} position={position} rotation={rotation}>
      {/* top cone */}
      <mesh position={[0, half / 2, 0]}>
        <coneGeometry args={[radius, half, segs]} />
        <meshPhongMaterial
          color="#e0e0e0"
          shininess={160}
          specular={new THREE.Color(0xffffff)}
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* bottom cone (flipped) */}
      <mesh position={[0, -half / 2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[radius, half, segs]} />
        <meshPhongMaterial
          color="#e0e0e0"
          shininess={160}
          specular={new THREE.Color(0xffffff)}
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

/* ─── Spike configuration ──────────────────────────────────── */
/*
  Camera at [0,0,6], fov 70 → viewport ≈ ±4.2 wide × ±2.6 tall at Z=0.
  Spikes kept at edges, Z = 0 to -1.5.
*/
const SPIKES = [
  // left cluster
  { position: [-3.4,  1.2,  0.0] as [number,number,number], rotation: [0.2,  0.5,  0.8] as [number,number,number], length: 3.8, radius: 0.040, opacity: 0.65, rotationSpeed: [0.006, 0.004, 0.003] as [number,number,number], driftFreq: 0.30, driftAmp: 0.30 },
  { position: [-3.8, -0.8, -0.5] as [number,number,number], rotation: [-0.3, 0.2,  1.3] as [number,number,number], length: 2.6, radius: 0.032, opacity: 0.50, rotationSpeed: [-0.005,0.006, 0.003] as [number,number,number], driftFreq: 0.25, driftAmp: 0.26 },
  { position: [-3.0,  2.6, -0.3] as [number,number,number], rotation: [0.5, -0.2,  0.4] as [number,number,number], length: 1.8, radius: 0.025, opacity: 0.42, rotationSpeed: [0.007,-0.005,0.006] as [number,number,number], driftFreq: 0.22, driftAmp: 0.20 },
  { position: [-4.0, -2.2, -0.8] as [number,number,number], rotation: [1.0,  0.3,  0.6] as [number,number,number], length: 3.0, radius: 0.030, opacity: 0.45, rotationSpeed: [0.004, 0.007,-0.005] as [number,number,number], driftFreq: 0.18, driftAmp: 0.28 },

  // right cluster
  { position: [ 3.5,  0.9,  0.0] as [number,number,number], rotation: [0.1, -0.6, -0.9] as [number,number,number], length: 3.6, radius: 0.038, opacity: 0.62, rotationSpeed: [0.005,-0.004,0.005] as [number,number,number], driftFreq: 0.32, driftAmp: 0.30 },
  { position: [ 3.9, -1.3, -0.5] as [number,number,number], rotation: [-0.4, 0.3, -1.0] as [number,number,number], length: 2.4, radius: 0.028, opacity: 0.48, rotationSpeed: [-0.004,0.005,-0.006] as [number,number,number], driftFreq: 0.28, driftAmp: 0.24 },
  { position: [ 3.2,  2.4, -0.4] as [number,number,number], rotation: [0.6, -0.3, -0.5] as [number,number,number], length: 2.0, radius: 0.026, opacity: 0.40, rotationSpeed: [0.007, 0.003,-0.004] as [number,number,number], driftFreq: 0.20, driftAmp: 0.22 },
  { position: [ 4.2, -2.5, -0.8] as [number,number,number], rotation: [-0.8, 0.5,  0.3] as [number,number,number], length: 2.8, radius: 0.030, opacity: 0.44, rotationSpeed: [-0.003,0.006,-0.005] as [number,number,number], driftFreq: 0.16, driftAmp: 0.26 },

  // top band
  { position: [ 0.8,  2.8, -0.6] as [number,number,number], rotation: [0.0,  0.7,  0.2] as [number,number,number], length: 4.2, radius: 0.034, opacity: 0.40, rotationSpeed: [0.003, 0.004, 0.005] as [number,number,number], driftFreq: 0.15, driftAmp: 0.22 },
  { position: [-1.8,  3.0, -1.0] as [number,number,number], rotation: [0.2, -0.4,  0.6] as [number,number,number], length: 2.2, radius: 0.022, opacity: 0.35, rotationSpeed: [-0.004,0.003,-0.004] as [number,number,number], driftFreq: 0.12, driftAmp: 0.18 },

  // bottom band
  { position: [ 0.5, -2.8, -0.6] as [number,number,number], rotation: [0.1, -0.5,  0.4] as [number,number,number], length: 4.0, radius: 0.034, opacity: 0.40, rotationSpeed: [-0.004,0.003,-0.005] as [number,number,number], driftFreq: 0.14, driftAmp: 0.22 },
  { position: [-2.0, -3.0, -1.0] as [number,number,number], rotation: [0.4,  0.2, -1.5] as [number,number,number], length: 2.4, radius: 0.024, opacity: 0.34, rotationSpeed: [0.005,-0.004, 0.004] as [number,number,number], driftFreq: 0.11, driftAmp: 0.20 },
];

/* ─── Background particles ──────────────────────────────────── */
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.012;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#ffffff" transparent opacity={0.22} sizeAttenuation />
    </points>
  );
}

/* ─── Scene ─────────────────────────────────────────────────── */
export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 70 }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 6, 4]}   intensity={4}   color="#ffffff" />
      <directionalLight position={[-4, -3, -2]} intensity={1.8} color="#8899cc" />
      <pointLight        position={[0, 0, 5]}   intensity={2}   color="#ffffff" />

      {SPIKES.map((s, i) => (
        <Spike key={i} {...s} />
      ))}
      <Particles />
    </Canvas>
  );
}
