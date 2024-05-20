import { TERMINAL_HISTORY_KEY } from "$/constants";
import type { CommandType } from "$/type";
import { getLocalStorageItem, setLocalStorageItem } from "$/lib/util";

import { COMMAND_ACTIONS, COMMANDS, type TCommandValues } from "./constant";

export const isValidCommand = (userInputCommand: string) => {
	const isValidInput = Object.values(COMMANDS).includes(
		userInputCommand as TCommandValues
	);
	if (isValidInput) {
		return "validInput";
	}
	return "invalidInput";
};

export const historyLengthCutter = <T>(commandArr: T[]): T[] => {
	return commandArr.slice(-40);
};

export const findAvailableCommand = (inputCommand: string) => {
	if (inputCommand === "") {
		return [];
	}
	const commandArr = Object.values(COMMANDS);
	return commandArr.filter((command) => command.startsWith(inputCommand));
};

export const outputCreator = (inputCommand: string) => {
	const action = COMMAND_ACTIONS[inputCommand as TCommandValues];
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
