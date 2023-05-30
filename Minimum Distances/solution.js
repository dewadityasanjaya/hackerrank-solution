/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    let answer = -1;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                let temp = Math.abs(i - j);
                if (answer === -1) {
                    answer = temp;
                } else if (answer > temp) {
                    answer = temp;
                }
            }
        }
    }
    return answer;
}