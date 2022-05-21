function fib_table(n) {
    var fib = [0, 1, 1];
    if (n <= 2) {
        return 1;
    }
    for(let i = 3; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n]
}

console.log(fib_table(5))