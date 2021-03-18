// Utility functions


const isNotNull = (str) => str != null;

const hasRightLength = (str) => str.length < 9;

const hasUpperCaseCharacter = (str) => {
	return str.toLowerCase() != str
}

const hasLowerCaseCharacter = (str) => {
	return str.toUpperCase() != str
}

const hasDigit = (str) => {
	const regex = new RegExp('\d');
	const rex = regex.test(str);
	return rex;
}

const minimumConditionsReached = conditions => {
	// conditions is an array of booleans
	trueConditions = conditions.filter(bool => bool);
	return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
	const conditions = [
		isNotNull(password),
		hasRightLength(password),
		hasUpperCaseCharacter(password),
		hasLowerCaseCharacter(password),
		hasDigit(password)
	];
	const result =
		minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

	return result;
};

module.exports = {
	verifyPassword,
	hasRightLength,
	isNotNull,
	hasUpperCaseCharacter,
	hasLowerCaseCharacter,
	hasDigit,
	minimumConditionsReached
};