/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    let maxHeight = 0;
    for (let item of word) {
        const charIndex = item.charCodeAt() - 97;
        if (maxHeight < h[charIndex]) {
            maxHeight = h[charIndex];
        }
    }
    return maxHeight * word.length;
}