import { TERMINAL_HISTORY_KEY } from "$/constants/localStorageKey";

export const getStorageArr = () => {
	const commandString = localStorage.getItem(TERMINAL_HISTORY_KEY);
	if (commandString === null) return null;
	const commandArr = JSON.parse(commandString);
	return commandArr;
};

export const createStorageArr = (command: string) => {
	localStorage.setItem(TERMINAL_HISTORY_KEY, JSON.stringify([command]));
};

export const putStorageArr = (command: string, prevCommandArr: string[]) => {
	prevCommandArr.push(command);
	localStorage.setItem(TERMINAL_HISTORY_KEY, JSON.stringify(prevCommandArr));
};

export const resetStorage = () => {
	localStorage.removeItem(TERMINAL_HISTORY_KEY);
};
