/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    let counterA = 0;
    for (let item of s) {
        if (item === 'a') {
            counterA++;
        }
    }
    let answer = counterA * (Math.floor(n / s.length))
    for (let i = 0; i < n % s.length; i++) {
        if (s[i] === 'a') {
            answer++;
        }
    }
    return answer;
}