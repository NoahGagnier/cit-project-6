class CustomError extends Error{ //inherit from error class (a class that is built in called error)
constructor(args){
    super(args) //super pushes it up to the error or custom error class
    this.name = "CustomError";
}
}

function throwGenericError(){
 throw new Error("Generic Error");
}

function throwCustomError(){
    throw new CustomError ("Custom Error");
}

//Generic Error
console.log("Force Generic Error");
try{
console.log("Generic error try block");
throwGenericError();
}
catch(error){
console.log("Generic error catch block");
console.log(`${error.name}: ${error.message}`);
}
finally{
console.log("Generic error finally block");
}

//Custom Error
console.log("Force Custom Error");
try{
console.log("Custom error try block");
throwCustomError();
}
catch(error){
console.log("Custom error catch block");
console.log(`${error.name}: ${error.message}`);
}
finally{
console.log("Custom error finally block");
}