/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  solution = [];

  for (let i = 0; i < nums.length; i++) {
    for (let id = i + 1; id < nums.length; id++) {
      if (nums[i] + nums[id] === target) {
        solution.push(i);
        solution.push(id);
      }
    }
  }
  console.log(solution);

  return solution;
};

twoSum([2,7,11,15], 9)

//loop through array and check sum of each number vs the others until it equals the target
//return the two indexes that were added
