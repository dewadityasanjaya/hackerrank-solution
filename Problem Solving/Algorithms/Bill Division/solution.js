/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
    let actualBill = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i != k) {
            actualBill = actualBill + bill[i] / 2;
        }
    }
    if (actualBill === b) {
        console.log('Bon Appetit')
    } else {
        console.log(b - actualBill);
    }
}