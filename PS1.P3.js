const stringMod = (str, func) => func(str);

let s = 'supercalifragilisticexpialidocious'
let expr1 = stringMod(s, (s) => s.replace(/c/gi, ',c').split(','));
console.log(expr1);

function replaceA(originalString, modifiedString, numberReplaced, length) {
    this.originalString = originalString;
    this.modifiedString = modifiedString;
    this.numberReplaced = numberReplaced;
    this.length = length;
}

let output = new replaceA(s, stringMod(s, (str) => str.replace(/a/gi, 'A')), (s.match(/a/g) || []).length, s.length);
console.table(output);

module.exports = {stringMod};
