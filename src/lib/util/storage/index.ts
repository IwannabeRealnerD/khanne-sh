import { TERMINAL_HISTORY_KEY } from "$/constants/localStorageKey";
import type { LocalStorageType, localStorageItemMap } from "./type";

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

export const resetStorage = (key: LocalStorageType) => {
	localStorage.removeItem(key);
};

export const getLocalStorageItem = <T extends LocalStorageType>(
	key: T
): localStorageItemMap[T] | undefined => {
	try {
		const serializedData = localStorage.getItem(key);
		if (serializedData === null) {
			resetStorage(key);
			return undefined;
		}
		return JSON.parse(serializedData);
	} catch {
		return undefined;
	}
};


export const setToLocalStorage = (key: string, value: unknown) => {
	const serializedData = JSON.stringify(value);
	localStorage.setItem(key, serializedData);
};
