"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "riki",
    email: "kuki",
    isactive: true
};
function createUser({ name: string, isPaid: boolean }) {
    return 0;
}
function createCourse() {
    return { name: "riki", isPaid: false };
}
createUser({ name: "riki", isPaid: false });
function createUser_(user) {
    // user._id="5545";  <--- gives error since it is readonly
    return user;
}
createUser_({ _id: "1255", name: "souvik", email: "chuchu@gmail.com", isActive: true });
