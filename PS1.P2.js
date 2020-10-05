const evaluate = expression => {
    var num1 = parseInt(expression[0]);
    var op = expression[1];
    var num3 = parseInt(expression[2]);;

    let add = () => num1 + num3;
    let mul = () => num1 * num3;
    let sub = () => num1 - num3;
    let pow = () => num1 ** num3;
    let div = () => num1 / num3;

    if (op == '+') {
        return add;
    } else if (op == '*') {
        return mul;
    } else if (op == '-') {
        return sub;
    } else if (op == '^') {
        return pow;
    } else if (op == '/') {
        return div;
    }
}
module.exports = {evaluate};

const expression = '2^8';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)