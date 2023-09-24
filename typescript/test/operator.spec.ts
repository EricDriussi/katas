import { sum } from "../src/operator";

describe("operator should", () => {
	it("sum", () => {
		expect(sum(2, 3)).toBe(5);
	});
});
