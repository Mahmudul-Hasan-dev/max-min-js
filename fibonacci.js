const fibo = [0, 1];
//fibonacci series start from index 2 because the number in series is the sum of previous two number
for (i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);