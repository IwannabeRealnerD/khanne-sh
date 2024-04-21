import { TERMINAL_HISTORY_KEY } from "$/constants";
import type { CommandType } from "$/type";
import { getLocalStorageItem, setLocalStorageItem } from "$/lib/util";

import { COMMAND_ACTIONS, COMMAND_OBJ } from "./constant";

export const isValidCommand = (userInputCommand: string) => {
	const isValidInput =
		Object.values(COMMAND_OBJ).includes(userInputCommand)
	if (isValidInput) {
		return "validInput";
	}
	return "invalidInput";
};

export const historyLengthCutter = <T>(commandArr: T[]): T[] => {
	return commandArr.slice(-40);
};

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
	const action = COMMAND_ACTIONS[inputCommand];
	return action ? action() : `khanne-sh: command not found: ${inputCommand}`;
};

export const putLocalStorageArr = (commandObj: CommandType) => {
	const prevCommandArr = getLocalStorageItem(TERMINAL_HISTORY_KEY);
	if (prevCommandArr === undefined) {
		setLocalStorageItem(TERMINAL_HISTORY_KEY, [commandObj]);
		return;
	}
	if (prevCommandArr.length > 50) {
		const shortCommandArr = historyLengthCutter(prevCommandArr);
		shortCommandArr.push(commandObj);
		setLocalStorageItem(TERMINAL_HISTORY_KEY, shortCommandArr);
		return;
	}
	prevCommandArr.push(commandObj);
	setLocalStorageItem(TERMINAL_HISTORY_KEY, prevCommandArr);
};

export const claerStorageArr = () => {
	setLocalStorageItem(TERMINAL_HISTORY_KEY, []);
};
