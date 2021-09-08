import React from 'react';


function add(a, b) {
    return a + b;
}

export default add;

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    let division = (a / b);
    let roundstring = division.toFixed(2)
    return roundstring
}

export { sub, mul, div }