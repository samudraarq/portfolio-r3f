import Background from "./components/background/Background";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import { Leva } from "leva";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Leva collapsed hidden={pathname !== "/debug"} />
      <Canvas
        eventSource={document.getElementById("root") || undefined}
        eventPrefix="client"
        shadows
      >
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
      <Loader />
      <div className={styles.content}>
        <Navbar />
        <div className={styles.contentContainer}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
