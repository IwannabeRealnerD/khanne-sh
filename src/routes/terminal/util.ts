import { TERMINAL_HISTORY_KEY } from "$/constants";
import type { CommandType } from "$/type";
import { getLocalStorageItem, setLocalStorageItem } from "$/lib/util";
import { COMMAND_OBJ } from "./constant";

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
	if (inputCommand === COMMAND_OBJ.HELP)
		return "Here are commands that you can use: \n 1. about \n 2. github \n 3. help";
	if (inputCommand === COMMAND_OBJ.GITHUB)
		return "Redirecting to github repositories...";
	return `khanne-sh: command not found: '${inputCommand}'`;
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
