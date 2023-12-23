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

