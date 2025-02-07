/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const fn = function sum(accum, curr) { return accum + curr; };

var reduce = function (nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    };
    return val;
};


console.log('reduce this array [1,2,3,4] sum each one, starting from 0: ', reduce([1, 2, 3, 4], fn, 0));