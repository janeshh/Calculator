function Calc(opr, x, y) {
    const isNotValid = typeof x !== 'number' || typeof y !== 'number';

    if (isNotValid) {
        return "Error";
    }

    switch (opr) {
        case 'mult':
            return x * y;
        case 'div':
            return x / y;
        case 'sum':
            return x + y;
        case 'sub':
            return x - y;
        default:
            return "unknown operation";
    }
}

console.log(Calc('mult', 10, 4));
console.log(Calc('div', 8, 7));
console.log(Calc('sub', 2, 1));
console.log(Calc('sum', 9, 7));
