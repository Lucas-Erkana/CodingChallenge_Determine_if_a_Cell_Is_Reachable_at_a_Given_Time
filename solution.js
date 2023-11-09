var isReachableAtTime = function(sx, sy, fx, fy, t) {
  let dx = Math.abs(fx - sx);
  let dy = Math.abs(fy - sy);
  let totalDistance = dx + dy;

  if (totalDistance > t || totalDistance % 2 !== t % 2) {
      return false;
  } else {
      return true;
  }
}

console.log(isReachableAtTime(1, 1, 9, 9, 8));  // should return `true`
console.log(isReachableAtTime(1, 1, 9, 9, 6));  // should return `false`
console.log(isReachableAtTime(1, 2, 9, 10, 8));  // should return `true`
console.log(isReachableAtTime(1, 2, 9, 10, 7));  // should return `false`
console.log(isReachableAtTime(1, 11, 1, 11, 0));  // should return `true`
console.log(isReachableAtTime(1, 11, 1, 11, 1));  // should return `false`




module.exports = isReachableAtTime;