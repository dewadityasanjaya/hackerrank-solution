// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    const catA = Math.abs(z - x);
    const catB = Math.abs(z - y);
    if (catA < catB) {
        return ('Cat A');
    } else if (catA > catB) {
        return ('Cat B');
    } else if (catA === catB) {
        return ('Mouse C');
    }
}