const chromedriver = require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

// prevent copy-paste of password
module.exports = {
	test: async function () {
		let testCases = [{ email: "eve.holt@reqres.in", password: "cityslicka", test: copyTest }];
		for (let test of testCases) {
			await main(test.email, test.password, test.test);
		}
	},
};

async function main(email, password, test) {
	const driver = await new Builder().forBrowser("chrome").build();
	await driver.get("http://localhost:3000");
	let emailInput = await driver.wait(until.elementLocated(By.id("inputEmail")), 5000);
	let passwordInput = await driver.wait(until.elementLocated(By.id("inputPassword")), 5000);
	await emailInput.sendKeys(email);
	await passwordInput.sendKeys(password);
	await test(driver, emailInput, passwordInput);
	await driver.quit();
}

// email field is copied, then the password field is copied and then pasted into the password field
// password field has the value of the email field because the password field does not allow copying
// prevents someone copying ur password without ur knowledge
async function copyTest(driver, emailInput, passwordInput) {
	await driver.actions().click(emailInput).keyDown(Key.CONTROL).sendKeys("a").keyUp(Key.CONTROL).keyDown(Key.CONTROL).sendKeys("c").keyUp(Key.CONTROL).perform();
	await driver.actions().click(passwordInput).keyDown(Key.CONTROL).sendKeys("a").keyUp(Key.CONTROL).keyDown(Key.CONTROL).sendKeys("c").keyUp(Key.CONTROL).perform();
	await driver.actions().click(passwordInput).keyDown(Key.CONTROL).sendKeys("a").keyUp(Key.CONTROL).keyDown(Key.CONTROL).sendKeys("v").keyUp(Key.CONTROL).perform();
	let passText = await passwordInput.getAttribute("value");
	assert.strictEqual(passText, "eve.holt@reqres.in");
}
