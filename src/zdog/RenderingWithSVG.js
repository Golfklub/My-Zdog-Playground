import Zdog from "zdog";

export const RenderingWithSVG = () => {
  // Made with Zdog

  // ----- setup ----- //

  // get svg element
  let svg = document.querySelector("svg");
  // rendering sizes
  const zoom = 4;
  const sceneWidth = 16;
  const sceneHeight = 16;
  let viewWidth = sceneWidth * zoom;
  let viewHeight = sceneHeight * zoom;
  let svgWidth = svg.getAttribute("width");
  let svgHeight = svg.getAttribute("height");
  // set viewBox using zoom
  svg.setAttribute(
    "viewBox",
    `${-viewWidth / 2}  ${-viewHeight / 2} ` + `${viewWidth} ${viewHeight}`
  );
  // rendering variable
  let isSpinning = true;
  const TAU = Zdog.TAU;

  // create an scene Anchor to hold all items
  let scene = new Zdog.Anchor();

  // ----- model ----- //

  // add shapes to scene
  new Zdog.Shape({
    addTo: scene,
    path: [{ x: 0, y: -8 }, { x: 8, y: 8 }, { x: -8, y: 8 }],
    translate: { z: 10 },
    color: "#E62",
    stroke: 3,
    fill: true
  });

  new Zdog.Ellipse({
    addTo: scene,
    diameter: 20,
    translate: { z: -10 },
    stroke: 5,
    color: "#636"
  });

  // ----- animate ----- //

  function animate() {
    // make changes to model, like rotating scene
    scene.rotate.y += isSpinning ? 0.03 : 0;
    scene.updateGraph();
    render();
    requestAnimationFrame(animate);
  }

  function render() {
    empty(svg);
    scene.renderGraphSvg(svg);
  }

  animate();

  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  // ----- drag ----- //

  let dragStartRX, dragStartRY;
  let minSize = Math.min(svgWidth, svgHeight);

  // add drag-rotatation with Dragger
  new Zdog.Dragger({
    startElement: svg,
    onDragStart: function() {
      isSpinning = false;
      dragStartRX = scene.rotate.x;
      dragStartRY = scene.rotate.y;
    },
    onDragMove: function(pointer, moveX, moveY) {
      scene.rotate.x = dragStartRX - (moveY / minSize) * TAU;
      scene.rotate.y = dragStartRY - (moveX / minSize) * TAU;
    }
  });
};
