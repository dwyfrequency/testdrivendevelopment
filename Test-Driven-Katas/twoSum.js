const twoSum = (arr, target) => {
  const counter = {};
  for (let i of arr) {
    const desired = target - i;
    if (counter[desired] !== undefined) {
      return i > desired ? [desired, i] : [i, desired];
    }
    counter[i] = i;
  }
  return [];
};

module.exports = twoSum;
