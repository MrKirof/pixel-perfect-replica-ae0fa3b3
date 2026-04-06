import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

/* ── Distorted Metallic Sphere ── */
const MetallicSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.12 + pointer.y * 0.4;
    meshRef.current.rotation.y = t * 0.18 + pointer.x * 0.4;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={1.4}>
        <icosahedronGeometry args={[1, 128]} />
        <MeshDistortMaterial
          color="#aabbcc"
          emissive="#110022"
          emissiveIntensity={0.15}
          roughness={0.08}
          metalness={1}
          distort={0.3}
          speed={1.8}
          envMapIntensity={2.5}
        />
      </mesh>
    </Float>
  );
};

/* ── Meteor shooting through the sphere ── */
interface MeteorData {
  startX: number;
  startY: number;
  startZ: number;
  endX: number;
  endY: number;
  endZ: number;
  speed: number;
  delay: number;
  scale: number;
  rotSpeed: number;
  seed: number;
}

const METEOR_COUNT = 5;

const meteorConfigs: MeteorData[] = Array.from({ length: METEOR_COUNT }, (_, i) => {
  // Start from random corner/edge, pass through center, exit opposite side
  const angle = (i / METEOR_COUNT) * Math.PI * 2 + Math.random() * 0.8;
  const elevation = (Math.random() - 0.5) * 1.5;
  const dist = 5;
  return {
    startX: Math.cos(angle) * dist,
    startY: elevation + 2,
    startZ: Math.sin(angle) * dist * 0.5 - 1,
    endX: -Math.cos(angle) * dist,
    endY: -elevation - 2,
    endZ: -Math.sin(angle) * dist * 0.5 + 1,
    speed: 0.08 + Math.random() * 0.06,
    delay: i * 2.5 + Math.random() * 1.5,
    scale: 0.05 + Math.random() * 0.06,
    rotSpeed: 1 + Math.random() * 3,
    seed: i * 137 + 42,
  };
});

const Meteor = ({ data }: { data: MeteorData }) => {
  const groupRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Points>(null);
  const geo = useMemo(() => createAsteroidGeometry(data.seed), [data.seed]);

  const trailCount = 30;
  const trailPositions = useMemo(() => new Float32Array(trailCount * 3), []);
  const trailOpacities = useMemo(() => new Float32Array(trailCount), []);

  const trailTexture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 32; c.height = 32;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.3, "rgba(255,200,100,0.6)");
    g.addColorStop(1, "rgba(255,100,50,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(c);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    // Loop cycle
    const cycle = data.speed;
    const totalDuration = 1 / cycle;
    const progress = ((t + data.delay) % totalDuration) / totalDuration;

    // Ease: slow at edges, fast through center
    const eased = progress;

    const x = THREE.MathUtils.lerp(data.startX, data.endX, eased);
    const y = THREE.MathUtils.lerp(data.startY, data.endY, eased);
    const z = THREE.MathUtils.lerp(data.startZ, data.endZ, eased);

    groupRef.current.position.set(x, y, z);
    groupRef.current.rotation.x = t * data.rotSpeed * 0.7;
    groupRef.current.rotation.y = t * data.rotSpeed;

    // Update trail
    if (trailRef.current) {
      const pos = trailRef.current.geometry.attributes.position.array as Float32Array;
      // Shift trail positions back
      for (let i = trailCount - 1; i > 0; i--) {
        pos[i * 3] = pos[(i - 1) * 3];
        pos[i * 3 + 1] = pos[(i - 1) * 3 + 1];
        pos[i * 3 + 2] = pos[(i - 1) * 3 + 2];
      }
      pos[0] = x;
      pos[1] = y;
      pos[2] = z;
      trailRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <mesh geometry={geo} scale={data.scale}>
          <meshStandardMaterial
            color="#aaaaaa"
            roughness={0.8}
            metalness={0.3}
            emissive="#ff6633"
            emissiveIntensity={0.3}
            envMapIntensity={0.8}
          />
        </mesh>
        {/* Glow around meteor */}
        <mesh scale={data.scale * 3}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#ff8844" transparent opacity={0.15} depthWrite={false} />
        </mesh>
      </group>

      {/* Trail */}
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={trailPositions} count={trailCount} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          map={trailTexture}
          color="#ff9944"
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </>
  );
};

const MeteorShower = () => (
  <group>
    {meteorConfigs.map((data, i) => (
      <Meteor key={i} data={data} />
    ))}
  </group>
);

/* ── Small debris particles ── */
const OrbitParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 400;

  const { positions, speeds, radii, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const radii = new Float32Array(count);
    const offsets = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      radii[i] = 1.8 + Math.random() * 1.5;
      speeds[i] = 0.08 + Math.random() * 0.3;
      offsets[i] = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(offsets[i]) * radii[i];
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.0;
      positions[i * 3 + 2] = Math.sin(offsets[i]) * radii[i];
    }
    return { positions, speeds, radii, offsets };
  }, []);

  const texture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 32; c.height = 32;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(255,255,255,0.5)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(c);
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const a = offsets[i] + t * speeds[i];
      pos[i * 3] = Math.cos(a) * radii[i];
      pos[i * 3 + 2] = Math.sin(a) * radii[i];
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        map={texture}
        color="#99bbff"
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

/* ── Main ── */
const FooterVortex = () => (
  <div className="relative h-[320px] w-full max-w-[340px] overflow-hidden">
    <div
      className="absolute inset-0 rounded-full opacity-35"
      style={{
        background: "radial-gradient(circle, hsl(220 70% 55% / 0.25), hsl(270 50% 45% / 0.12), transparent 70%)",
        filter: "blur(45px)",
      }}
    />
    <Canvas camera={{ position: [0, 0.3, 5.5], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-4, 3, -2]} intensity={0.4} color="#6644ff" />
      <pointLight position={[3, -2, 3]} intensity={0.3} color="#ff4488" />
      <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.4} penumbra={1} color="#4488ff" />

      <MetallicSphere />
      <AsteroidBelt />
      <OrbitParticles />

      <Environment preset="night" />
    </Canvas>
  </div>
);

export default FooterVortex;
