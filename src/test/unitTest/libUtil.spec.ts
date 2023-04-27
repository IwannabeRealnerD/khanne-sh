import { describe, expect, it } from "vitest";
import { isStringArray } from "$/lib/util";

describe("문자열이 배열인지 확인하는 함수", () => {
	it("문자열 배열이 아닌 값 이 입력될 경우", () => {
		expect(isStringArray("test")).toBe(false);
		expect(isStringArray("2")).toBe(false);
		expect(isStringArray("{test:2}")).toBe(false);
		expect(isStringArray("null")).toBe(false);
		expect(isStringArray("undefined")).toBe(false);
		expect(isStringArray("[undefined]")).toBe(false);
		expect(isStringArray(`["undefined",`)).toBe(false);
		expect(isStringArray("[undefined")).toBe(false);
	});

	it("문자열 배열이 전달될 경우", () => {
		const testArrString1 = JSON.stringify(["undefffined", "weoif"]);
		const testArrString2 = JSON.stringify(["wefi"]);
		expect(isStringArray(testArrString1)).toBe(true);
		expect(isStringArray(testArrString2)).toBe(true);
	});
});
