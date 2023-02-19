import { TERMINAL_HISTORY_KEY } from "$/constants/localStorageKey";

export const getStorageArr = () => {
	const commandString = localStorage.getItem(TERMINAL_HISTORY_KEY);
	if (commandString === null) return null;
	const commandArr = JSON.parse(commandString);
	return commandArr;
};

export const putStorageArr = (command: string) => {
	const commandString = localStorage.getItem(TERMINAL_HISTORY_KEY);
	if (commandString === null) {
		localStorage.setItem(TERMINAL_HISTORY_KEY, JSON.stringify([command]));
		return;
	}
	const commandArr: string[] = JSON.parse(commandString);
	commandArr.push(command);
	localStorage.setItem(TERMINAL_HISTORY_KEY, JSON.stringify(commandArr));
};

export const resetStorage = () => {
	localStorage.removeItem(TERMINAL_HISTORY_KEY);
};
