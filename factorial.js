//Write two functions that finds factorial of any number. one should use recursive, other should just use a for loop
// 5! = 5*4*3*2*1 = 120
// 5! = 5 * 4! = 5*4*3! = 5*4*3*2!
// BIG O - O(n)
function findFactorialRecursive(number) {
    debugger;
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}
// BIG O - O(n)
function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}
console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));