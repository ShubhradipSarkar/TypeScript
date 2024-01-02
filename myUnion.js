var score = 55; // score can handle both data types
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
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, "3", true];
// Assign probable value
var seatAllotment;
seatAllotment = "NIT"; // works fine
// seatAllotment="IIT" // doesn't work
