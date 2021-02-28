// Fibbonacci

// fib (6) -> array of length + 1
// initialize with zero (because we would need to sum)

// not recursive

// O(n)
const fib = (n) => {
    // create an array with length + 1 items, all as 0
    const arr = new Array(n + 1).fill(0);
    arr[1] = 1;
    for(let i = 0; i <= n; i++) {
        if (arr[i + 1] !== undefined) {
            arr[i + 1] = arr[i + 1] + arr[i]
        }
        if (arr[i + 2] !== undefined) {
            arr[i + 2] = arr[i + 2] + arr[i]
        }
    }
    return arr[n];
}
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));