"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 55; // score can handle both data types
score = "55";
getDbId(3);
getDbId("5");
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
        return;
    }
    return id + 2;
}
const data1 = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = [1, 2, "3", true];
// Assign probable value
let seatAllotment;
seatAllotment = "NIT"; // works fine
