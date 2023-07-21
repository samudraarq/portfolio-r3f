import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const CameraRig = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        state.pointer.x * state.viewport.width * 0.2,
        (1 + state.pointer.y) / 2,
        5.5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export default CameraRig;
