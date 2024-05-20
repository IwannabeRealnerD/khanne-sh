import { describe, expect, it } from "vitest";
import { findAvailableCommand } from "$/routes/util";

describe("findAvailableCommand - 입력한 문자에 해당하는 명령어 배열을 반환하는 함수", () => {
	it("he가 입력됐을 때 help 출력", () => {
		const result = findAvailableCommand("he");
		expect(result).toEqual(["help"]);
	});
	it("c가 입력됐을 때 clear, contact 출력", () => {
		const result = findAvailableCommand("c");
		expect(result).toEqual(["clear", "contact"]);
	});
	it("p가 입력됐을 때 pwd만 출력 - p가 포함된 문자가 아니라 p로 시작하는 문자만 찾기위해", () => {
		const result = findAvailableCommand("p");
		expect(result).toEqual(["pwd"]);
	});
	it("해당되는 명령어가 없을 경우 빈배열 출력", () => {
		const result = findAvailableCommand("cwefjoi");
		expect(result).toEqual([]);
	});
});
