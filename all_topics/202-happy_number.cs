public class Solution {
    List<int> nResults = new List<int>();
    public int separate(int n){
            int acc = 0;
            foreach(char c in n.ToString()){
                int digits = c - '0';
                acc = acc + digits * digits;
            }
            return acc;
        }
    public bool IsHappy(int n) {
        //85: 64 + 25 = 89
        //89: 64 + 81 = 145
        //145: 1 + 16 + 25 = 42
        //42: 16 + 4 = 20
        //20: 4 + 0 = 4
        //4: 12
        //12: 1 + 4 = 5
        //5: 25
        //25: 4 + 25 = 29
        //29: 4 + 81 = 85
        //85: 64 + 25 = 89

        //poder calcular el cuadrado de cada digito unitario de n

        // si en algun momento n da igual a un valor que ya n haya sido, retornar false
        while(n != 1){
            nResults.Add(n);
            n = separate(n);
            if (nResults.Contains(n)){
                return false;
            }
            //Console.WriteLine(string.Join(", ", nResults));
        };
        return true;
    }
}