const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty array if items do not sum to desired', () => {
    expect(twoSum(['blem'], 4)).deep.equal([]); // need to use deep equal for arrays an objects
    expect(twoSum([1, 2, 1, 1, 7], 5)).deep.equal([]); // need to use deep equal for arrays an objects
  });

  it('Returns correct sum', () => {
    expect(twoSum([1, 2, 1, 3, 7], 5)).deep.equal([2, 3]); // need to use deep equal for arrays an objects
  });
});
