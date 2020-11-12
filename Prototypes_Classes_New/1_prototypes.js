// Prototypes is a template object for for example arrays.
// They contain typically a bunch of methods.
// String.prototype stores methods and properties for every single string
// Array.prototype stores methods and properties for every single array

// Nearly all objects in JavaScript are instances of Object.
// A typical object inherits properties (including methods) from Object.prototype

// We can actually add our own methods to prototypes


String.prototype.yell = function(){
    return `${this.toUpperCase()}`
}



// __proto__ is a reference (odniesienie) to the string prototype