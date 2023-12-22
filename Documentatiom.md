Javascript that tells whats wrong while writing code

//*Types:*//
Number String Boolean Null Undefined Void Object Array Tuples etc.

//*Variable:*//
let <Variable_Name>:type=value  <----Way to declear...   ----- (1)

how does it differ from js?
well, whwnever using this in a function or anywhere in the code, if you try assigning a string variable to num, it tells you to stop ;)

but, you can omit the " :type " too.

/**so why use it in first place and if you don't then how does it differ from javascript?**/
whenever you write "Variable_Name.", it automatically shows you the methods, which was missing in javascript ;)

there is a case where declearing as (1) is important

like, 
let hero;
function getHero(){
    return "Virat Kohli";
}

hero=getHero();

//*Functions*//

**code**
................................................................................
function addTwo(num:number){   <---- right way to implement a function...
    return num+2;
}

addTwo(5);
................................................................................

another way to declear functions
----> /**let loginUser = (name:string, email:string, password:number) => { }**/
This is a strict way and every parameter is important...

also can set a default value to a parameter
like, /**let loginUser = (name:string="Ram", email:string, password:number=false) => { }**/
This way we can skip name and password when using this function...




