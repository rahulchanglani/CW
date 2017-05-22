// sol 1

function swap (a, b) {
    a.number = a.number ^ b.number;
    b.number = a.number ^ b.number;
    a.number = a.number ^ b.number;
}


// sol 2  - ES 6  / JavaScript 1.7 and above

var a = 1,
    b = 2;

[a, b] = [b, a];

// sol 3 (fastest one line)

a = b + (b=a, 0)


// sol 4 (slowest)

a = (function (b){ return b; })(b, b=a)

// sol 5

var a = 100;
var b = 3124783;
a = a ^ b; // a = 3124811
b = a ^ b; // b = 100
a = a ^ b; // a = 3124783

// sol 6

a = a + b;
b = a - b;
a = a - b;

// sol 7 using temp var

var x = 10;
var y = 20;
var tmp = x;
x = y;
y = tmp;