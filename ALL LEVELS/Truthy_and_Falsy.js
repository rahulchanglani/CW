const truthy = [ 111, '!?', true, [ 'arrr' ], { me: true }, () => false? 'he' : 'ha' ];
const falsy = [ 0, '', false, NaN, undefined, null ];

const truthy = [true, 1, {}, [], "a"]
const falsy = [false, 0, null, undefined, ""]

const truthy = [true, 1, 'true', {}, Infinity];
const falsy = [false, 0, '', null, void 0];

const truthy = [1, 2, 3, 4, 5];
const falsy = [false, '', 0, null, NaN];


/*

In JavaScript there are truthy and falsy values:

truthy: a value that when evaluated in a boolean context returns true
falsy: a value that when evaluated in a boolean context returns false
MDN links:

https://developer.mozilla.org/en/docs/Glossary/Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
Your task

You are given two empty arrays (truthy and falsy) and you have to fill this array with at least 5 elements in each which will evaluate to true or false accordingly.


LEVEL 7 kyu
*/