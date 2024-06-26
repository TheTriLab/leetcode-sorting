// Challenge https://leetcode.com/problems/squares-of-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(e => e * e).sort((a, b) => a - b)
};