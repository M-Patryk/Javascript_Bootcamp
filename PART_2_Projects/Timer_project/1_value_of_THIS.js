// 1. Did you define he function with an arrow function?
// Write console.log(this) on the first VALID line above the arrow function.
// Value of THIS in the arrow function will be equal to that console.log

// 2. Did you call "bind", "call" or "apply" on the function when you invoked (wezwac) it?
// "this" is equal of the first argument of "bind", "call" or "apply".

// 3. All other cases
// "this" is equal to whatever is to the left of the '.' in the method call


//NOTES

// If arrow function is defined inside "class" and the function uses "this" property then "this" instead of
// pointing outside of the "class" (because it would normally be if we follow rule 1) would point
// on the "class" itself (behind the scenes the arrow function is being put inside the "constructor")