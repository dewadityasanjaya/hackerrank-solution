/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    const mapGrade = grades.map(roundingGrade);
    return mapGrade;
}

function roundingGrade(score) {
    const moduloScore = score % 5;
    if (moduloScore >= 3 && score > 37) {
        score = score + (5 - moduloScore)
    }
    return score;
}