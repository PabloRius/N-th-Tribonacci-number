/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n < 2) { return n; }
    let tbn = [0, 1, 1];
    for (let i=3;i<=n;i++) {
        const new_value = tbn[0] + tbn[1] + tbn[2];
        tbn[0] = tbn[1]
        tbn[1] = tbn[2]
        tbn[2] = new_value; 
    }
    return tbn[2];
};

module.exports = tribonacci;