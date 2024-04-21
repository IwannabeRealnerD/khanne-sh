import { describe, expect, it } from "vitest";
import { historyLengthCutter } from "$/routes/util";

describe("명령어 객체 배열이 100개가 넘을 경우 index 0-90 함수만 남겨놓는 함수", () => {
	it("50개 이상 입력 됐을때 배열의 최신 요소 10개만 반환 확인", () => {
		const baseArr = Array.from(Array(50).keys());
		const commandArr = [...baseArr, "0", "1"];
		const expectedArr = [...baseArr.slice(12), "0", "1"];
		const result = historyLengthCutter(commandArr);
		expect(result).toEqual(expectedArr);
	});
	it("50개 이상 입력 됐을때 배열의 최신 요소 40개만 반환 확인", () => {
		const baseArr = Array.from(Array(50).keys());
		const commandArr = [...baseArr, "0", "1"];
		const result = historyLengthCutter(commandArr);
		expect(result.length).toBe(40);
	});
});
