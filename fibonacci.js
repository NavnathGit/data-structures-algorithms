//Given a number N returns the index value of the Fibonacci sequence, where the sequence is
//0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// the pattern of the sequence is that each value is sum of the 2 previous values, that means for N=5 -> 2+3
// BIG O - O(n)
function fibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}
// BIG O - O(2^n)
function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(43));
console.log(fibonacciIterative(8));