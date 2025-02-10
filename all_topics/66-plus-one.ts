function plusOne(digits: number[]): number[] {
    for(let i = digits.length - 1; i >= 0; i--){
        if (digits[i] < 9){
            digits[i] += 1;
            return digits
        }else{
            digits[i] = 0;
            digits[i - 1] + 1;
        }

        if(digits.reduce((a,b)=> a + b) === 0){
            digits.unshift(1);
        }
    }
    return digits;
};