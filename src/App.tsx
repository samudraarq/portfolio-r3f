import Background from "./components/background/Background";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas
        eventSource={document.getElementById("root") || undefined}
        shadows
      >
        <Background />
      </Canvas>
      <div className={styles.content}>
        <div className={styles.container}>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
