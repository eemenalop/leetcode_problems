/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        };
    };
    return filteredArr;
};

fn = function greaterThan10(n) { return n > 10; }

console.log(`filter n > 10 over this array [0,10,20,30]: `, filter([0, 10, 20, 30], fn));