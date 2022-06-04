//primitives
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 23;
var ages;
ages = [23, 43, 23];
for (var i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}
var fname;
fname = 'Mynul';
var isAkash;
isAkash = true;
var person;
person = {
    name: 'mynul',
    age: 23
};
var people;
//type inference
var course = 'Assalamualikum vai....';
course = 123;
//generics
function generics(array, value) {
    var abc = __spreadArray([value], array, true);
    return abc;
}
var demoArray = [1, 23, 45];
var insertArray = generics(demoArray, -1);
