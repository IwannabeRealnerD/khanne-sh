import { TERMINAL_HISTORY_KEY } from "$/constants";
import type { CommandType } from "$/type";
import { getLocalStorageItem, setLocalStorageItem } from "$/lib/util";

export const checkDuplicatedCommand = (
	command: string,
	resultArr: string[]
) => {
	if (resultArr.length < 3) return false;
	return resultArr
		.slice(resultArr.length - 3)
		.every((value) => value === command);
};
export const outputCreator = (inputCommand: string) => {
	if (inputCommand === "help")
		return "Here are commands that you can use: \n 1. about \n 2. github \n 3. help";
	if (inputCommand === "github") return "Redirecting to github repositories...";
	return "Command not found.";
};

export const putLocalStorageArr = (commandObj: CommandType) => {
	const prevCommandArr = getLocalStorageItem(TERMINAL_HISTORY_KEY);
	if (prevCommandArr === undefined) {
		setLocalStorageItem(TERMINAL_HISTORY_KEY, [commandObj]);
		return;
	}
	prevCommandArr.push(commandObj);
	setLocalStorageItem(TERMINAL_HISTORY_KEY, prevCommandArr);
	localStorage.setItem(TERMINAL_HISTORY_KEY, JSON.stringify(prevCommandArr));
};

export const isInputNotEnglish = (input: string) => {
	const regex = /[a-zA-Z]/;
	return regex.test(input);
};
