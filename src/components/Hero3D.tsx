"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    float time = uTime * 0.15;
    float elevation = sin(position.x * 0.5 + time) * 0.08 
      + sin(position.y * 0.5 + time * 0.7) * 0.06
      + sin((position.x + position.y) * 0.3 + time * 0.5) * 0.04;
    vElevation = elevation;
    vec3 pos = position + normal * elevation;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform vec3 uColor;
  uniform float uOpacity;
  
  void main() {
    float alpha = mix(0.12, 0.28, vElevation * 3.0 + 0.5) * uOpacity;
    vec3 color = mix(uColor, uColor * 1.15, vElevation * 4.0);
    gl_FragColor = vec4(color, alpha);
  }
`;

function AnimatedSurface() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, 0, -2]}>
      <planeGeometry args={[8, 8, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
        uniforms={{
          uTime: { value: 0 },
          uColor: { value: new THREE.Color("#b4dcff") },
          uOpacity: { value: 0.6 },
        }}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-3, -2, 2]} intensity={0.3} />
      <AnimatedSurface />
    </>
  );
}

function Hero3DCanvas() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}

const Hero3DCanvasDynamic = dynamic(() => Promise.resolve(Hero3DCanvas), {
  ssr: false,
});

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(180,220,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0">
        <Hero3DCanvasDynamic />
      </div>
    </div>
  );
}
