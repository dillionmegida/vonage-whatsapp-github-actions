const assert = require("assert");
const returnPhrase = require(".");

describe("returnPhrase", function () {
	it("should print the right phrase", function () {
		assert.strictEqual(returnPhrase(), "I am not a library");
	});
});
