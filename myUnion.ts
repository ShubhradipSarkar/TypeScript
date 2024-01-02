let score: number|string=55;  // score can handle both data types
score="55";

getDbId(3);
getDbId("5");

function getDbId(id: number|string):number|void{  // <--- This function can take id as both number and string and return both void and number
    if(typeof id==="string"){
        id.toUpperCase();
        return;
    }
    return id+2;
}

const data1: number[]=[1,2,3]
const data2: string[]=["1", "2", "3"]
const data3: (number|string|boolean)[]=[1,2,"3",true]

// Assign probable value
let seatAllotment: "NIT"|"IIIT"|"GFTIs"

seatAllotment="NIT" // works fine

// seatAllotment="IIT" // doesn't work

export{}


