const sum = (x, y) => x + y;
const square = (x) => x * x;

// @ts-ignore
export const mean = (data) => data.reduce(sum) / data.length;
// @ts-ignore
export const stddev = function (d) {
  let m = exports.mean(d);
  return Math.sqrt(
    d
      .map((x) => x - m)
      .map(square)
      .reduce(sum) /
      (d.length - 1)
  );
};

export function greeting(name) {
  return `Hello ${name}`;
}
