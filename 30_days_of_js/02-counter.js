/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {

    return function () {
        return n++
    };
};
const counter = createCounter(11);
console.log(counter());
console.log(counter());
console.log(counter());