/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let hr12 = parseInt(`${s[0]}${s[1]}`)
    let min12 = `${s[3]}${s[4]}`
    let sec12 = `${s[6]}${s[7]}`
    let tim12 = `${s[8]}${s[9]}`
    let hr24 = '';
    if (tim12 == 'PM') {
        if (hr12 == 12) {
            hr24 = `${hr12}`;
        } else {
            hr24 = `${hr12 + 12}`;
        }
    } else if (tim12 == 'AM') {
        if (hr12 == 12) {
            hr24 = '00';
        } else {
            if (hr12 < 10) {
                hr24 = '0' + `${hr12}`;
            } else {
                hr24 = `${hr12}`;
            }
        }
    }
    return `${hr24}:${min12}:${sec12}`
}