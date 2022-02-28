const chromedriver = require("chromedriver");
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

// focus on whether you are asked to sign in again after having signed in once
// login with correct info and then refresh page and also try to return to login page
// checks if user is kept on successful login page until they log out
module.exports = {
	test: async function () {
		const driver = await new Builder().forBrowser("chrome").build();
		await driver.get("http://localhost:3000");
		let emailInput = await driver.wait(until.elementLocated(By.id("inputEmail")), 5000);
		let passwordInput = await driver.wait(until.elementLocated(By.id("inputPassword")), 5000);
		let signIn = await driver.wait(until.elementLocated(By.id("signIn")), 5000);
		await emailInput.sendKeys("eve.holt@reqres.in");
		await passwordInput.sendKeys("cityslicka");
		await signIn.click();
		let errMsg = await driver.wait(until.elementLocated(By.id("loginMsg")), 5000);
		let msg = await errMsg.getText();
		assert.strictEqual(msg, "Login Successful");
		await driver.navigate().refresh();
		await driver.navigate().back();
		errMsg = await driver.wait(until.elementLocated(By.id("loginMsg")), 5000);
		msg = await errMsg.getText();
		assert.strictEqual(msg, "Login Successful");
		let logout = await driver.wait(until.elementLocated(By.id("logoutBtn")));
		await logout.click();
		await driver.navigate().back();
		let title = await driver.wait(until.elementLocated(By.id("signInTitle")), 5000);
		let titleMsg = await title.getText();
		assert.strictEqual(titleMsg, "Sign In");
		await driver.quit();
	},
};
