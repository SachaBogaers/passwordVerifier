
const functions = require('./script.js');
const verifyPassword = functions.verifyPassword;
const isNotNull = functions.isNotNull;
const hasRightLength = functions.hasRightLength;
const hasUpperCaseCharacter = functions.hasUpperCaseCharacter;
const hasLowerCaseCharacter = functions.hasLowerCaseCharacter;
const hasDigit = functions.hasDigit;
const minimumConditionsReached = functions.minimumConditionsReached;

test("Is not null", function () {
	expect(isNotNull("string")).toBe(true)
});

test("Is not null", function () {
	expect(isNotNull(null)).toBe(false);
});

test("Has the right length", function () {
	expect(hasRightLength("HelloIAmALongPassword")).toBe(false)
});

test("Does not have the right length", function () {
	expect(hasRightLength("shortPas")).toBe(true)
});

test("Has uppercase characters", function () {
	expect(hasUpperCaseCharacter("HELLOooo")).toBe(true);
})

test("Has no uppercase characters", function () {
	expect(hasUpperCaseCharacter("hello")).toBe(false);
})


test("Has lowercase characters", function () {
	expect(hasLowerCaseCharacter("hello")).toBe(true);
})

test("Has no lowercase characters", function () {
	expect(hasLowerCaseCharacter("HELLO")).toBe(false);
})

test("Has digits", function () {
	expect(hasDigit("12200hsdlfs")).toBe(true);
})

test("Has no digits", function () {
	expect(hasDigit("abcdefg")).toBe(true);
})

test("Minimum conditions reached", function () {
	expect(minimumConditionsReached([true, true, true, true, true])).toBe(true)
})

test("Minimum conditions not reached", function () {
	expect(minimumConditionsReached([true, false, false, false, true])).toBe(false)
})

test("Verify password", function() {
	expect(verifyPassword("")).toBe(false)
})

test("Verify password", function() {
	expect(verifyPassword("henkie1")).toBe(true)
})

test("Verify password", function() {
	expect(verifyPassword("1234a")).toBe(true)
})

test("Verify password", function() {
	expect(verifyPassword("z")).toBe(true)
})

test("Verify password", function() {
	expect(verifyPassword("HENKhenk")).toBe(true)
})

test("Verify password", function() {
	expect(verifyPassword("HENK33")).toBe(false)
})

test("Verify password", function() {
	expect(verifyPassword("1234")).toBe(false)
})

