interface User {
    readonly dbID: number,
    email: String,
    userId: number,
    slackId?: number,
    startTrial:()=>string,   // So interfaces make you use methods also
    endTrial(): string       // Different type of declearation 
}

const Shubhradip:User={dbID:5, email:"shubhradipsarkar@gmail.com", userId:122541,
startTrial: ()=>{
    return "trial started"
},
endTrial:()=>{
    return "trial ended"
}
}

export{}