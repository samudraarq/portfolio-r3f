import { useRef } from "react";
import { Mesh } from "three";
import { Float, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

const Background = () => {
  const boxRef = useRef<Mesh>(null!);
  const sphereRef = useRef<Mesh>(null!);

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

      <mesh castShadow ref={sphereRef}>
        <sphereGeometry args={[0.5, 12, 12]} />
        <meshStandardMaterial color={"salmon"} />
      </mesh>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.3, 0.3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh position={[2, 0, 0]} ref={boxRef} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="grey" />
        </mesh>
      </Float>

      <mesh receiveShadow position-y={[-2]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color={baseColor} />
      </mesh>
    </>
  );
};

export default Background;
