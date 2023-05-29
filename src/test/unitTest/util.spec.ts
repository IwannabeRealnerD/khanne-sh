import { describe, expect, it } from "vitest";
import { checkDuplicatedCommand } from "$/routes/util";
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

describe("이전 명령어 3개와 같은지 확인 함수", () => {
	it("length가 1-2이며 중복되지 않은 배열이 입력될 경우", () => {
		expect(checkDuplicatedCommand("명령어", ["efw", "fwe"])).toBe(false);
		expect(checkDuplicatedCommand("명령어", ["efw"])).toBe(false);
	});
	it("length가 1-2이며 중복된 배열이 입력될 경우", () => {
		expect(checkDuplicatedCommand("명령어", ["명령어", "명령어"])).toBe(false);
		expect(checkDuplicatedCommand("명령어", ["명령어"])).toBe(false);
	});
	it("중복된 명령어일 경우", () => {
		expect(
			checkDuplicatedCommand("명령어", ["명령어", "명령어", "명령어"])
		).toBe(true);
		expect(
			checkDuplicatedCommand("명령어", ["몰라", "명령어", "명령어", "명령어"])
		).toBe(true);
	});
	it("중복된 케이스가 3개 있지만 중간에 다른 명령어로 인해 중복된 명령어가 아닐 경우", () => {
		expect(
			checkDuplicatedCommand("명령어", ["명령어", "명령어", "몰라", "명령어"])
		).toBe(false);
		expect(
			checkDuplicatedCommand("명령어", [
				"명령어",
				"명령어",
				"명령어",
				"명령어",
				"몰라"
			])
		).toBe(false);
		expect(
			checkDuplicatedCommand("명령어", [
				"명령어",
				"명령어",
				"몰라",
				"명령어",
				"명령어"
			])
		).toBe(false);
	});
});
