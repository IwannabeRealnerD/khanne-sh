import { describe, expect, it } from "vitest";
import { makeHelpOutput } from "../../src/routes/util";
import { COMMANDS } from "../../src/routes/constant";

describe("makeHelpOutput()", () => {
	it("all commands should be in the result", () => {
		const commands = Object.values(COMMANDS);
		const helpOutput = makeHelpOutput();
		commands.forEach((command) => {
			expect(helpOutput).toContain(command);
		});
	});
	it('length of "help" command should be same with the number of commands', () => {
		const commands = Object.values(COMMANDS);
		const helpOutput = makeHelpOutput();
		const lineCount = helpOutput.split("\n").length - 2;
		expect(lineCount).toBe(commands.length);
	});
});
