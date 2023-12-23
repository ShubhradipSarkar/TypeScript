const User = {
    name: "riki",
    email: "kuki",
    isactive: true
}

function createUser({name: string, isPaid: boolean}){
    return 0;
}

function createCourse():{name: string, isPaid: boolean}{
    return {name:"riki", isPaid:false};
}

createUser({name: "riki", isPaid: false});


type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCard?: number  // This is optional since "?" is used...
}

function createUser_(user: User):User{
    // user._id="5545";  <--- gives error since it is readonly

    return user;
}

createUser_({_id:"1255", name:"souvik", email:"chuchu@gmail.com", isActive: true});

// Joining types/Classes

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {  // Usecase - Assume having a code base where many classes are written
    cvv: number                               // So just to use the classes in a new class, we write like this...
}



export{}