// It accepts two arguments: password and username
//Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If are requirements are met, return true, otherwise false
// isValidPassword(123gaasda, hisfnsdun) -- true
// isValidPassword(!2412 dasd, !2312 aeqwa) -- false

function isValidPassword(password, username) {
	if (password.length < 8 || (password.includes(' ') || username.includes(' ')) || password == username) {
		return false;
	} else {
		return true;
	}
}

console.log(isValidPassword('!@#as23111', '12312123'))
