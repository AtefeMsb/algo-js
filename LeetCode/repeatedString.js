/**
 * Find frequency of letter a in the first n letter of infinite repeated string s.
 * @param {*} s | string
 * @param {*} n | integer
 */
// function repeatedString(s, n) {

//     // If s (string) is falsy or does not exist or empty 
//     if (!s || s.length == 0) {
//          return null;
//     }
//     // number of a's in the string
//     let aCount = 0;
//     // number of total a's in the first n letter of infinite repetiotion of s
//     let totalCount =  0;

//     let aRemain = 0;

//     // how many a's is the string s
//     for (let letter of s) {
//         if (letter === 'a') {
//             aCount++;
//         }
//     }

//     // how many times s gets repeated in n first letter
//     let sFrequency = Math.floor(n / s.length);

//     // how many a's is in the rest of teh string
//    let leftoverChar =  n % s.length;
//    for (let i = 0; i < leftoverChar; i++) {
//     if (s[i] === 'a') {
//         aRemain++;
//     }
// }
//     totalCount = aCount * sFrequency + aRemain;
//     return totalCount;
// }

function repeatedString(s, n) {
    const counta = (str) => str.split('')
      .filter(c => c == 'a')
      .length
    
    const d = Math.floor(n / s.length)
    const r = n - (s.length * d)
    return d * counta(s) + counta(s.substr(0, r))
  }

  
let count = repeatedString('a', 1000000000000);
console.log(count);