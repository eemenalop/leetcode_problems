function once(fn) {
    var hasCalled = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!hasCalled) {
            hasCalled = true;
            return fn.apply(void 0, args);
        }
        else {
            return undefined;
        }
    };
}
var fn = function (a, b, c) { return (a + b + c); };
var onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // 6
//onceFn(2,3,6); // returns undefined without calling fn
