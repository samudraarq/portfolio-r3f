import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Box from "./Box";

const Background = () => {
  const { bgColor, baseColor } = useControls("base", {
    bgColor: "#1b1b1c",
    baseColor: "#555555",
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

  return (
    <>
      <color attach="background" args={[bgColor]} />
      <OrbitControls />

      <ambientLight />
      <pointLight position={[10, 10, 10]} castShadow />

      <fog args={[bgColor, near, far]} attach="fog" />

      <Box position={[0, -1, 0]} />
      <Box position={[1.1, -0.2, 0]} scale={0.5} />
      <Box position={[-0.5, 0.3, 0]} scale={0.4} />
      <Box position={[0.3, 0.4, 0]} scale={0.2} />

      <mesh receiveShadow position-y={[-2]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color={baseColor} />
      </mesh>
    </>
  );
};

export default Background;
