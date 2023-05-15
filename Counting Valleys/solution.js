/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let landHeight = 0;
    let inValley = false;
    let valleyCounter = 0;
    for (let item of path) {
        if (item == 'U') {
            landHeight++;
            if (landHeight >= 0) {
                inValley = false;
            }
        } else if (item == 'D') {
            landHeight--;
            if (landHeight < 0 && !inValley) {
                inValley = true;
                valleyCounter = valleyCounter + 1;
            }
        }
    }
    return valleyCounter;
}