import React, { useEffect } from "react";
import "./App.css";
import { RenderingWithCanvas } from "./zdog/RenderingWithCanvas";
import { RenderingWithSVG } from "./zdog/RenderingWithSVG";
import { RenderingWithIllustration } from "./zdog/RenderingWithIllustration";

function App() {
  useEffect(() => {
    RenderingWithCanvas();
    RenderingWithSVG();
    RenderingWithIllustration();
  }, []);

  return (
    <div className="App" style={{ width: "100%" }}>
      <canvas
        className="zdog-canvas"
        width="200"
        height="500"
        style={{ background: "#FDB" }}
      />
      <svg
        className="zdog-svg"
        width="200"
        height="500"
        style={{ background: "#FDB" }}
      />
      <canvas
        className="zdog-illustration"
        width="200"
        height="500"
        style={{ background: "#FDB" }}
      />
    </div>
  );
}

export default App;
