let User: [string, number, boolean]

// User should fill data types in specific format that was defined
User=["Riki", 1, true]  

type Account=[number, boolean]
const myUser:Account=[1, true]

// A weired thing
// so something defined by type Account should have 2 values

// But there may be something strange
myUser.push(5); // It doesn't give error

