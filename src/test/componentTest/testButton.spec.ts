import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/svelte";

import TestButton from "$/lib/common/testButton/testButton.svelte";

describe("testComponent", () => {
	it("버튼 테스트", () => {
		render(TestButton, { inputCommand: "testing" });
		const button = screen.getByRole("button");
		expect(button.textContent).toEqual("testing");
	});
});
