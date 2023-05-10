/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    let sumArr = 0;
    let counter = 0;
    for (let i = 0; i <= s.length - m; i++) {
        for (let j = i; j < i + m; j++) {
            sumArr = sumArr + s[j];
        }
        if (sumArr == d) {
            counter += 1;
        }
        sumArr = 0;
    }
    return counter;
}