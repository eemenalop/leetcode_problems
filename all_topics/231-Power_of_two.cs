public class Solution {
    public bool IsPowerOfTwo(int n) {
        if (n == 1) return true;
        if (n == 0) return false;
        if (n % 2 != 0){
            return false;
        };
        while(n != 1){
            n = n / 2;
            if (n == 1) return true;
            if(n % 2 != 0){
                return false;
            };
        }
        return true;
    }
}