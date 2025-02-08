function singleNumber(nums) {
    var counter = {};
    for (var i = 0; i < nums.length; i++) {
        if (counter[nums[i]]) {
            counter[nums[i]] += 1;
        }
        else {
            counter[nums[i]] = 1;
        }
    }
    for (var key in counter) {
        if (counter[key] === 1)
            return Number(key);
    }
}
;
console.log(singleNumber([13, 2, 2, 6, 6]));
