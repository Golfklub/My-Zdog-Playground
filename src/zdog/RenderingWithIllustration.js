import Zdog from "zdog";

export const RenderingWithIllustration = () => {
  let isSpinning = true;

  let illo = new Zdog.Illustration({
    element: document.querySelector(".zdog-illustration"),
    zoom: 4,
    dragRotate: true,
    // stop rotation when dragging starts
    onDragStart: function() {
      isSpinning = false;
    },
    onDragEnd: () => {
      isSpinning = true;
    }
  });

  // add shapes...

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    translate: { z: 10 },
    stroke: 5,
    color: "#636"
  });

  // square
  new Zdog.Rect({
    addTo: illo,
    width: 20,
    height: 20,
    // position further back
    translate: { z: -10 },
    stroke: 12,
    color: "#E62",
    fill: true
  });

  const img = new Image();
  const canvas = document.querySelector(".zdog-illustration");
  const ctx = canvas.getContext("2d");
  img.src =
    "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";

  function animate() {
    // rotate
    if (isSpinning) {
      illo.rotate.y += 0.03;
    }
    illo.updateRenderGraph();
    ctx.drawImage(img, 0, 0);
    requestAnimationFrame(animate);
  }
  animate();
};
