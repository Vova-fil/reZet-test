const date = [1, 3, 5, 4, 5, 7];
const res = [];
for (let i = 0; i < date.length; i += 1) {
  let a = date[i];
  let b = date[i + 1];
  let c = date[i + 2];

  if (a > b < c || a < b > c) {
    const d = 1;

    res.push(d);
  } else {
    d = 0;
    res.push(d);
  }
}
console.log(res);
