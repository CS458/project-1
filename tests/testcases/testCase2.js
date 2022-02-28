const chromedriver = require("chromedriver");
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

// remember me functionality
module.exports = {
	test: async function () {
		let testCases = [
			{ remember: true, test: rememberMe },
			{ remember: false, test: doNotRememberMe },
		];
		for (let test of testCases) {
			await main(test.remember, test.test);
		}
	},
};

// checks all test cases one by one
async function main(remember, test) {
	const driver = await new Builder().forBrowser("chrome").build();
	await driver.get("http://localhost:3000");
	let emailInput = await driver.wait(until.elementLocated(By.id("inputEmail")), 5000);
	let passwordInput = await driver.wait(until.elementLocated(By.id("inputPassword")), 5000);
	let rememberMeInput = await driver.wait(until.elementLocated(By.id("rememberInput")), 5000);
	let signIn = await driver.wait(until.elementLocated(By.id("signIn")), 5000);
	await emailInput.sendKeys("remember@me.com");
	await passwordInput.sendKeys("1122");
	if (remember) await rememberMeInput.click();
	await signIn.click();
	await driver.navigate().refresh();
	emailInput = await driver.wait(until.elementLocated(By.id("inputEmail")), 5000);
	passwordInput = await driver.wait(until.elementLocated(By.id("inputPassword")), 5000);
	let emailText = await emailInput.getAttribute("value");
	let passText = await passwordInput.getAttribute("value");
	await test(emailText, passText);
	await driver.quit();
}

// check if input fields retain their values on refresh (remember me option is checked)
async function rememberMe(emailText, passText) {
	assert.strictEqual(emailText, "remember@me.com");
	assert.strictEqual(passText, "1122");
}

// check if input fields are empty on refresh (remember me option is unchecked)
async function doNotRememberMe(emailText, passText) {
	assert.strictEqual(emailText, "");
	assert.strictEqual(passText, "");
}
