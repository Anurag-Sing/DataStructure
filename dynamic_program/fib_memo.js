function fib_memo(n, memo = []) {
    if(memo[n] !== undefined) return memo[n];
    if(n <= 1) {
        return n
    }
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}
console.log(fib_memo(100))