/**
 * @param { number } x
 * @return {boolean}
 */

 var isPalindrome = function(x) {
    var array = [...`${x}`].map(Number)
    var newArray = Number(array.join(""));
    var reversed = array.reverse()
    var joined = Number(reversed.join(""));
    if(newArray === joined && newArray>=0) {
        return true
    } else {
        return false
    }
};

module.exports = isPalindrome;
