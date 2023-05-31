/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    let studentCounter = 0;
    for (let item of a.sort((x, y) => x - y)) {
        if (studentCounter === k) {
            return 'NO';
        } else if (item <= 0) {
            studentCounter++;
        }
    }
    return 'YES';
}