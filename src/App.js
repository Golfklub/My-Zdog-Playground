import React, { useEffect } from "react";
import "./App.css";
import { pathSVG } from "./zdog/pathSVG";
import HalloweenPumpkins from "./svgAssets/halloweenPumpkins";

function App() {
  useEffect(() => {
    pathSVG();
  }, []);

  return (
    <div className="App">
      <HalloweenPumpkins />
      <svg
        width="0 "
        height="0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          id="path"
          fill="#000000"
          d="M218,0.6v25c0,0-133-15.5-162-13c-37.1,3.2-41,11.9-45.7,13c-9.2,2.2-10.9-4-10.1-9c2.3-8,31-15.1,41.9-16  C53.7-0.4,217.9,0,218,0.6z"
        ></path>
      </svg>
      <canvas
        className="zdog-illustration"
        width="1920"
        height="1024"
        style={{ background: "#FDB" }}
      />
    </div>
  );
}

export default App;
