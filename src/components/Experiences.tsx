import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Experiences = () => {
  const ref = useRef<Mesh>(null!);

  const [isHover, setIsHover] = useState(false);

  useFrame((state, delta) => {
    // const t = state.clock.getElapsedTime();
    // ref.current.position.y = Math.sin(t);
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 3,
        (1 + state.pointer.y) / 2,
        5.5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={["#ebebeb"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh
        ref={ref}
        onPointerOver={() => setIsHover(true)}
        onPointerOut={() => setIsHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={isHover ? "salmon" : "hotpink"} />
      </mesh>
    </>
  );
};

export default Experiences;
