/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    for (let i = 0; i < 10000; i++) {
        x1 = x1 + v1;
        x2 = x2 + v2;
        if (x1 == x2) {
            return 'YES'
        }
    }
    return 'NO'
}