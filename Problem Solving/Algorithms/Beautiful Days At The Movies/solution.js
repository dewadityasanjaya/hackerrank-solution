/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    let dayCounter = 0;
    for (let dayCheck = i; dayCheck <= j; dayCheck++) {
        if (Math.abs(dayCheck - reversedNum(dayCheck)) % k === 0) {
            dayCounter++;
        }
    }
    return dayCounter;
}

function reversedNum(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}