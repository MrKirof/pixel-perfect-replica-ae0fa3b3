import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const WatchModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.6}>
      {/* Watch case - main body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.35, 64]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Watch bezel ring */}
      <mesh position={[0, 0.18, 0]}>
        <torusGeometry args={[1.05, 0.06, 16, 64]} />
        <meshStandardMaterial color="#e8e8e8" metalness={1} roughness={0.02} />
      </mesh>
      <mesh position={[0, -0.18, 0]}>
        <torusGeometry args={[1.05, 0.06, 16, 64]} />
        <meshStandardMaterial color="#e8e8e8" metalness={1} roughness={0.02} />
      </mesh>

      {/* Watch face */}
      <mesh position={[0, 0.181, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.0, 64]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.8} />
      </mesh>

      {/* Hour markers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 0.85;
        return (
          <mesh
            key={i}
            position={[Math.sin(angle) * r, 0.19, Math.cos(angle) * r]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <boxGeometry args={[i % 3 === 0 ? 0.08 : 0.04, 0.12, 0.01]} />
            <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.3} />
          </mesh>
        );
      })}

      {/* Hour hand */}
      <mesh position={[0, 0.195, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.04, 0.45, 0.01]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Minute hand */}
      <mesh position={[0.15, 0.195, -0.1]} rotation={[-Math.PI / 2, 0, Math.PI / 3]}>
        <boxGeometry args={[0.03, 0.6, 0.01]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Crown */}
      <mesh position={[1.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.2, 32]} />
        <meshStandardMaterial color="#d4d4d4" metalness={1} roughness={0.05} />
      </mesh>

      {/* Strap - top */}
      <mesh position={[0, 0, -1.6]}>
        <boxGeometry args={[0.55, 0.12, 2.0]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Strap - bottom */}
      <mesh position={[0, 0, 1.6]}>
        <boxGeometry args={[0.55, 0.12, 2.0]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Strap connectors */}
      <mesh position={[0, 0, -0.65]}>
        <boxGeometry args={[0.6, 0.2, 0.08]} />
        <meshStandardMaterial color="#b0b0b0" metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[0, 0, 0.65]}>
        <boxGeometry args={[0.6, 0.2, 0.08]} />
        <meshStandardMaterial color="#b0b0b0" metalness={0.95} roughness={0.05} />
      </mesh>
    </group>
  );
};

const FooterWatch = () => (
  <div className="w-full h-full min-h-[350px]">
    <Canvas
      camera={{ position: [0, 2.5, 4], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, 3, -3]} intensity={0.5} color="#a0c4ff" />
      <pointLight position={[0, 3, 0]} intensity={0.8} color="#ffffff" />
      <spotLight position={[0, 5, 3]} angle={0.4} penumbra={0.5} intensity={1} />
      <WatchModel />
      <Environment preset="studio" />
    </Canvas>
  </div>
);

export default FooterWatch;
