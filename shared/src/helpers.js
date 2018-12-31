export function promisify(fnc, ...args) {
  return new Promise((resolve, reject) => {
    fnc(...args, (err, ...results) => {
      if (err) reject(err);
      else resolve(...results);
    });
  });
}
