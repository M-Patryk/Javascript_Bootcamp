// role: <--- this is key        'Host' <--- This is value

//We make new object called "team", then we declare value of "role" as key in new object
const role = 'Host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
	[role]  : person,
	[role2] : person2
};
//So it looks like this:     Director: "James Cameron" || Host: "Jools Holland"


//Here we declare function using computed properties so it adds new property to our object
const addNewProperty = (object, key, value) => {
	return { ...object, [key]: value };
};
//const result = addNewProperty(team, 'smileyFace', ':)') or write in console: addNewProperty(team, 'smileyFace', ':)')
