function addTwo(num:number){
    return num+2;
}

addTwo(5);

function signUp(name:string, email:string, password:number){
    console.log(name.toUpperCase());
}

let loginUser=(name:string, email:string, password:number)=>{

} 

// If we try to fix what a function should return, we can write this like

// Normal function
function signIn(name:string, email:string, password:number): number{
    console.log(name.toUpperCase());

    return 5;
}

// Arrow function
let value = (name:string, email:string, password:number): number =>{
    console.log(name.toUpperCase());

    return 5;
}



signUp('riki', 'riki@gmail.com', 1234);
export{}