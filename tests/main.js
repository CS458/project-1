const fs = require("fs");
const testcasesDir = "./testcases/";
let testcases = [];

(async function main() {
	fs.readdirSync(testcasesDir)
		.filter(function (module) {
			return module.slice(module.length - 3) === ".js";
		})
		.forEach(function (module) {
			testcases.push(require(testcasesDir + module));
		});
	for (let test of testcases) {
		await test.test();
	}
})();
