/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    let t = 2, c = t
    while (--n)
        // c += t = (t * 3 / 2)|0 // <--- alternative floor method
        c += t += t >> 1         // <--- faster floor method
    return c
}