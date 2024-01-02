"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function signUp(name, email, password) {
    console.log(name.toUpperCase());
}
let loginUser = (name, email, password) => {
};
// If we try to fix what a function should return, we can write this like
// Normal function
function signIn(name, email, password) {
    console.log(name.toUpperCase());
    return 5;
}
// Arrow function
let value = (name, email, password) => {
    console.log(name.toUpperCase());
    return 5;
};
signUp('riki', 'riki@gmail.com', 1234);
