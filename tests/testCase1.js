const chromedriver = require("chromedriver");
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

// email and password fields validation, correctness and format
(async function testCase1() {
	let testCases = [
		{ email: "eve.holt@reqres.in", password: "cityslicka", test: correctCredentials },
		{ email: "eve.holt@reqres.in", password: "1122", test: wrongCredentials },
		{ email: "wrong@gmail.com", password: "cityslicka", test: wrongCredentials },
		{ email: "wrongEmail", password: "11", test: wrongFormat },
	];
	for (let test of testCases) {
		await main(test.email, test.password, test.test);
	}
})();

// checks all test cases one by one
async function main(email, password, test) {
	const driver = await new Builder().forBrowser("chrome").build();
	await driver.get("http://localhost:3000");
	let emailInput = await driver.wait(until.elementLocated(By.id("inputEmail")), 5000);
	let passwordInput = await driver.wait(until.elementLocated(By.id("inputPassword")), 5000);
	await emailInput.sendKeys(email);
	await passwordInput.sendKeys(password);
	let signIn = await driver.wait(until.elementLocated(By.id("signIn")), 5000);
	await signIn.click();
	await test(driver);
	await driver.quit();
}

// check if login is successful
async function correctCredentials(driver) {
	let errMsg = await driver.wait(until.elementLocated(By.id("loginMsg")), 5000);
	let msg = await errMsg.getText();
	assert.strictEqual(msg, "Login Successful");
}

// check if correct error is displayed when an incorrect password is supplied
async function wrongCredentials(driver) {
	let errMsg = await driver.wait(until.elementLocated(By.id("incorrectPassword")), 5000);
	let msg = await errMsg.getText();
	assert.strictEqual(msg, "Incorrect credentials.");
}

// check if validation messages are shown if inputs are of a wrong format
async function wrongFormat(driver) {
	let emailWarning = await driver.wait(until.elementsLocated(By.id("warningEmail")), 5000);
	let emailMsg = await emailWarning[0].getText();
	let passwordMsg = await emailWarning[1].getText();
	assert.strictEqual(emailMsg, "Please enter a valid email or phone number.");
	assert.strictEqual(passwordMsg, "Your password must contain between 4 and 60 characters.");
}
