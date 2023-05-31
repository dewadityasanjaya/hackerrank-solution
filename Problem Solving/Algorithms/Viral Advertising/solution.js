/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    let peopleShared = 5;
    let peopleLiked = Math.floor(peopleShared / 2);
    let accumulatedLiked = peopleLiked;
    while (--n) {
        peopleShared = peopleLiked * 3;
        peopleLiked = Math.floor(peopleShared / 2)
        accumulatedLiked = accumulatedLiked + peopleLiked;
    }
    return accumulatedLiked;
}