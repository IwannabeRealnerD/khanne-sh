import { describe, expect, it } from "vitest";
import { checkDuplicatedCommand } from "$/routes/terminal/util";
import { historyLengthCutter } from "$/routes/terminal/util";

// describe("명령어 객체 배열이 100개가 넘을 경우 index 0-90 함수만 남겨놓는 함수", () => {
// 	it("명령어 객체 배열이 101개일 경우 90개로 줄임", () => {
// 		const commandArr = new Array(101);
// 		const result = historyLengthCutter(commandArr);
// 		expect(result?.length).toBe(90);
// 	});
// 	it("명령어 객체 배열이 80개일 경우 여전히 90개로 반환", () => {
// 		const commandArr = new Array(101);
// 		const result = historyLengthCutter(commandArr);
// 		expect(result?.length).toBe(90);
// 	});
// });

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
