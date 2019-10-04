export const convertPathDataToPoint = path => {
  const array = [];
  for (var i = 0, l = 100; i < l; i++) {
    const point = path.getPointAtLength((i / l) * path.getTotalLength());
    array.push({ x: point.x, y: point.y });
  }
  return array;
};
