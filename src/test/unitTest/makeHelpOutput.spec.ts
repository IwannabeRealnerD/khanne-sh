import { describe, expect, it } from "vitest";
import { makeHelpOutput } from "$routes/util";
import { COMMANDS } from "$routes/constant";

describe("makeHelpOutput()", () => {
	it("all commands should be in the result", () => {
		const commands = Object.values(COMMANDS);
		const helpOutput = makeHelpOutput();
		commands.forEach((command) => {
			expect(helpOutput).toContain(command);
		});
	});
});
