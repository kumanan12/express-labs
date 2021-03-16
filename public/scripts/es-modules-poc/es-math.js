const sum = function(x,y) {
  return x + y;
}


const square = function (x) {
  return x * x;
}


// @ts-ignore
export const mean = function (data) {
  return data.reduce(sum)/data.length;
}

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

export const name = "Meghaa";

export function greeting(name) {
  return `Hello ${name}`;
}
