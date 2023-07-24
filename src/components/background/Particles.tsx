import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const Particles = () => {
  const ref = useRef<THREE.Points>(null!);
  const count = 300;
  const particles = useMemo(() => {
    const position = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      position[i] = (Math.random() - 0.5) * 10;
      position[i + 1] = (Math.random() - 0.5) * 5;
      position[i + 2] = (Math.random() - 0.5) * 10;
    }
    return { position };
  }, [count]);

  useFrame((_state, delta) => {
    ref.current.rotation.y += delta * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.position, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.02}
        sizeAttenuation
        color="#ffffff"
        fog={false}
      />
    </points>
  );
};

export default Particles;
