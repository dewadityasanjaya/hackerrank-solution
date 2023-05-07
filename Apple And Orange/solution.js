/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const appleDrop = apples.map((item) => {
        return a + item;
    });
    const orangeDrop = oranges.map((item) => {
        return b + item;
    });
    let sumApple = 0;
    for (let item of appleDrop) {
        if (item >= s && item <= t) {
            sumApple += 1;
        }
    }
    let sumOrange = 0;
    for (let item of orangeDrop) {
        if (item >= s && item <= t) {
            sumOrange += 1;
        }
    }
    console.log(sumApple);
    console.log(sumOrange);
}