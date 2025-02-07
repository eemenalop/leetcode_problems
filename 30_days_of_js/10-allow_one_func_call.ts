type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    
        let hasCalled = false;
    return function (...args: JSONValue[]){
        if (!hasCalled) {
            hasCalled = true;
            return fn(...args)
        } else {
            return undefined;
        }
    };
}


let fn = (a:any,b:any,c:any) => (a + b + c)
let onceFn = once(fn)


console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // 6
//onceFn(2,3,6); // returns undefined without calling fn
