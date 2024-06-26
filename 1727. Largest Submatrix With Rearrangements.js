// Challenge https://leetcode.com/problems/largest-submatrix-with-rearrangements/description/
// Solution Reference https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331142/video-give-me-10-minutes-how-we-think-about-a-solution/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    const row = matrix.length
    const col = matrix[0].length

    for (let i = 1; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j]
            }
        }
    }

    let res = 0
    for (let i = 0; i < row; i++) {
        matrix[i].sort((a, b) => a - b)

        for (let j = 0; j < col; j++) {
            const height = matrix[i][j]
            const width = col - j
            res = Math.max(res, height * width)
        }
    }

    return res
};