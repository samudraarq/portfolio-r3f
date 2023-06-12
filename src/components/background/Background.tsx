import { CameraControls } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Mesh, Object3D } from "three";
import { motion } from "framer-motion-3d";

const Background = () => {
  const boxRef = useRef<Mesh>(null!);
  const sphereRef = useRef<MeshProps>(null!);
  const cameraControlRef = useRef<CameraControls>(null!);

  const [isHover, setIsHover] = useState(false);

  const location = useLocation();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    boxRef.current.position.y = Math.sin(t) * 2;
    boxRef.current.position.x = Math.cos(t) * 2;
  });

  useEffect(() => {
    if (location.pathname === "/experiences") {
      cameraControlRef.current?.setLookAt(0, -2, 5.5, 0, 2, 0, true);
    } else {
      cameraControlRef.current?.setLookAt(0, 0, 5.5, 0, 0, 0, true);
    }
  }, [location.pathname]);

  const handleClick = () => {
    const object = sphereRef.current as unknown as Object3D;

    cameraControlRef.current?.fitToBox(object, true);
  };

  return (
    <>
      <color attach="background" args={["#ebebeb"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} castShadow />
      <CameraControls
        ref={cameraControlRef}
        maxDistance={10}
        minDistance={2}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
        minPolarAngle={Math.PI / 4}
      />
      <motion.mesh
        onPointerOver={() => setIsHover(true)}
        onPointerOut={() => setIsHover(false)}
        onClick={handleClick}
        castShadow
        ref={sphereRef}
        animate={{ x: 0 }}
      >
        <sphereGeometry args={[0.5, 12, 12]} />
        <meshStandardMaterial color={isHover ? "salmon" : "hotpink"} />
      </motion.mesh>
      <mesh position={[2, 0, 0]} ref={boxRef} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="grey" />
      </mesh>
      <mesh receiveShadow position={[0, 0, -1]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </>
  );
};

export default Background;
