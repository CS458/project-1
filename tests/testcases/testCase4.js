const chromedriver = require("chromedriver");
const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

// focus on facebook login, user and non user cases
module.exports = {
	test: async function () {
		let testCases = [
			{ email: "fb.test.bilkent@gmail.com", password: "facebooktest123!", test: fbUser },
			{ email: "wrong@gmail.com", password: "12345678", test: nonFbUser },
		];
		for (let test of testCases) {
			await main(test.email, test.password, test.test);
		}
	},
};

// tests use cases for when we log in with a facebook user and when we use wrong facebook credentials
async function main(email, password, test) {
	const driver = await new Builder().forBrowser("chrome").build();
	await driver.get("https://localhost:3000");
	const originalWindow = await driver.getWindowHandle();
	assert((await driver.getAllWindowHandles()).length === 1);
	let fbLgn = await driver.wait(until.elementLocated(By.id("fbLgn")), 5000);
	await fbLgn.click();
	try {
		await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 1000);
	} catch {
		fbLgn = await driver.wait(until.elementLocated(By.id("fbLgn")), 5000);
		await fbLgn.click();
		await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 5000);
	}
	const windows = await driver.getAllWindowHandles();
	for (let window of windows) {
		if (window !== originalWindow) {
			await driver.switchTo().window(window);
		}
	}
	await driver.wait(until.titleIs("Facebook"), 5000);
	let emailInput = await driver.wait(until.elementLocated(By.id("email")), 5000);
	let passwordInput = await driver.wait(until.elementLocated(By.id("pass")), 5000);
	let login = await driver.wait(until.elementLocated(By.name("login")), 5000);
	await emailInput.sendKeys(email);
	await passwordInput.sendKeys(password);
	await login.click();
	await test(driver, originalWindow, fbLgn);
	await driver.quit();
}

// logs in as the facebook user and then checks our application to see if the user got logged into the app
async function fbUser(driver, originalWindow, fbLgn) {
	await driver.wait(until.urlContains("welcome"));
	await driver.close();
	await driver.switchTo().window(originalWindow);
	let errMsg = await driver.wait(until.elementLocated(By.id("loginMsg")), 15000);
	let msg = await errMsg.getText();
	assert.strictEqual(msg, "Login Successful (Logged in with Facebook)");
}

// wrong credentials are provided so waits to make sure facebook redirects to a page with an error msg
async function nonFbUser(driver, originalWindow, fbLgn) {
	await driver.wait(until.urlContains("login_attempt"));
	await driver.close();
	await driver.switchTo().window(originalWindow);
}
