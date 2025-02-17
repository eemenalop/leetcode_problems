function lengthOfLastWord(s: string) {
    const arrA = s.trim();
    let counter = 0;
    for(let i = arrA.length - 1; i >= 0; i--){
        if (arrA[i] !== " "){
            counter++
        }else{
            return counter;
        }
    }
    return counter;
};