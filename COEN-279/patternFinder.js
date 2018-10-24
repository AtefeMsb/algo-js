/**
 * the method finds all string positions of pattern in the text
 * @param {string}  text
 * @param {string}  pattern
 * @return {array} result | array of pattern positions in the text
 */
function patternFinder(text, pattern) {
    let result = [];
    let count = 0;
    for (let s = 0; s < text.length - pattern.length + 1; s++) {
        let found = true;
        count = 0;
        for(let i = 0; i < pattern.length; i++) {
            if (text[s+i] !== pattern[i]) {
                found = false;
                break;
            }
            count++;
            if (found && count === pattern.length) {
                result.push(s);
            }
        }

    }
    return result;
       
}

const text = 'abracadbra';
const pattern = 'bra';

console.log(patternFinder(text, pattern));
