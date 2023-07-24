// import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Box from "./Box";
import CameraRig from "./CameraRig";
import Particles from "./Particles";
import { OrbitControls, Stars } from "@react-three/drei";
import { Perf } from "r3f-perf";

const Background = () => {
  const { bgColor, baseColor, bloomColor } = useControls("base", {
    bgColor: "#1b1b1c",
    baseColor: "#555555",
    bloomColor: "#ff8600",
  });

  const { near, far } = useControls("fog", {
    near: {
      value: 0,
      min: 0,
      max: 50,
      step: 0.1,
    },
    far: {
      value: 15,
      min: 0,
      max: 50,
      step: 0.1,
    },
  });
  const { perfVisible } = useControls("perf", {
    perfVisible: false,
  });
  const { orbitControls } = useControls("controls", {
    orbitControls: false,
  });

  return (
    <>
      <color attach="background" args={[bgColor]} />

      {perfVisible && <Perf position="top-left" />}

      {/* Camera */}
      <OrbitControls enabled={orbitControls} />
      {!orbitControls && <CameraRig />}

      {/* Light */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} castShadow />

      {/* Staging */}
      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <fog args={[bgColor, near, far]} attach="fog" />

      {/* Mesh */}
      <Particles />

      <Box position={[0, -1, 0]} />
      <Box position={[1.1, -0.2, 0]} scale={0.5} />
      <Box position={[-0.5, 0.3, 0]} scale={0.4} />
      <Box position={[0.3, 0.4, 0]} scale={0.2} />

      <mesh position-y={1.2} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color={bloomColor}
          emissive={bloomColor}
          emissiveIntensity={8}
          toneMapped={false}
        />
      </mesh>

      <mesh receiveShadow position-y={[-2]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color={baseColor} />
      </mesh>
    </>
  );
};

export default Background;
