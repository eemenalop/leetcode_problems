function isPalindrome(x: number): boolean {
    const palindrome = x.toString().split('').reverse().join('');

    return Number(palindrome) === x;
};