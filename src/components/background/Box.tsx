import { Float } from "@react-three/drei";
import { useControls } from "leva";

type Props = {
  scale?: number;
  position?: [number, number, number];
  floatingRange?: [number, number];
};

const Box = ({
  scale = 1,
  position = [0, 0, 0],
  floatingRange = [-0.1, 0.1],
}: Props) => {
  const { color } = useControls("box", {
    color: "#cccccc",
  });

  return (
    <Float
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={Math.random() * 1.5} // XYZ rotation intensity, defaults to 1
      floatIntensity={Math.random() * 1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={floatingRange} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <mesh position={position} castShadow scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

export default Box;
