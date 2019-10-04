import Zdog from "zdog";
import { makeZdogBezier } from "../helper/makeZdogBezier";
import { convertPathDataToPoint } from "../helper/convertPathDataToPoint";

export const pathSVG = () => {
  const scene = new Zdog.Illustration({
    element: document.querySelector(".zdog-illustration"),
    dragRotate: true
  });

  const svgData = document.getElementById("Halloween");
  const pointData = convertPathDataToPoint(svgData);
  new Zdog.Shape({
    addTo: scene,
    translate: { y: -400, x: 0 },
    path: makeZdogBezier(pointData),
    stroke: 10,
    color: "#636"
  });

  const animate = () => {
    scene.updateRenderGraph();
    requestAnimationFrame(animate);
  };

  animate();
};
