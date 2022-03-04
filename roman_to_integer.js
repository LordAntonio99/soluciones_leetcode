// Given a roman numeral, convert it to an integer.
/*
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let resultado = 0;

  for (i = 0; i < s.length; i++) {
    const actual = sym[s[i]];
    const siguiente = sym[s[i + 1]];

    if (actual < siguiente) {
      resultado += siguiente - actual;
      i++;
    } else {
      resultado += actual;
    }
  }

  return resultado;
};

console.log(romanToInt("LVIII"));
