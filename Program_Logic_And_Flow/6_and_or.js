let password = "asdasdsdasd";
if (password.length >= 6 && password.indexOf(" ") === -1){
    console.log("Password is valid!")
}
else{
    console.log("Sorry password is invalid!")
}

let color = "red";

if (color === 'red' || color ==='orange' || color === 'rose'){
    console.log("Color is reddish")
}
else{
    console.log('Color is not matching!')
}

let comparison1 = 'testtest';
let comparison2 = 'testtest';

if (!(comparison1 === comparison2)){
    console.log("No ! usage")
}
else{
    console.log("I used ! so even if those are same it wants them to be NOT same \ntruth is false in this case")
}

// If we are mixing operators ! && || then we have to have in mind that there is precedence.
// Firstly program checks ! then && then || so:
// let x = 10;
// x == 10 || x > 2 && !x >= 10
// so ! first, so x = true, but there is NOT ! so false,
// then x is higher than 2, but we had false with ! operator so in the end we get false,
// and at the end we get true becouse we have OR operator