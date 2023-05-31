/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    let treeHeight = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            treeHeight = treeHeight * 2;
        } else {
            treeHeight = treeHeight + 1;
        }
    }
    return treeHeight;
}