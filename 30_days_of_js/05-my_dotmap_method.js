/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i], i);
    }
    return newArray;
};

fn = function plusone(n) { return n + 1; }

console.log(`Map n + 1 over this array [1,2,3,4]: `, map([1, 2, 3, 4], fn));