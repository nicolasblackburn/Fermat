const { cos, sin, sqrt, floor, ceil } = Math;
const n = [...new Array(40).keys()];
const thetas = n.map(x => x / n.length * Math.PI / 4 / 2);
console.log(thetas);
const xs = thetas.map(theta => cos(theta*2) / sqrt(cos(theta*2)**2 - sin(theta*2)**2));
const ys = thetas.map(theta => sin(theta*2) / sqrt(cos(theta*2)**2 - sin(theta*2)**2));
const k = sqrt(5*17);

console.log(5*17);
console.table(xs.map((x, i, _, y = ys[i]) => ({x: parseFloat((x*k).toFixed(3)), y: parseFloat((y*k).toFixed(3)), floor: floor(x*k)**2 - floor(y*k)**2})));
