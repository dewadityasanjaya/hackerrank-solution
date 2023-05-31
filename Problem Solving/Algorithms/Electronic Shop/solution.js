/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    let answer = -1;
    for (let keyboard of keyboards) {
        for (let drive of drives) {
            const price = keyboard + drive;
            if (price <= b && price > answer) {
                answer = price;
            }
        }
    }
    return answer;
}