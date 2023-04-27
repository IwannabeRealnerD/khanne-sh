import { TERMINAL_HISTORY_KEY } from "$/constants/localStorageKey";
import type { LocalStorageGetType, LocalStorageSetType } from "./type";

export const putStorageArr = (command: string, prevCommandArr: string[]) => {
	prevCommandArr.push(command);
	localStorage.setItem(TERMINAL_HISTORY_KEY, JSON.stringify(prevCommandArr));
};

export const resetLocalStorage = (key: keyof LocalStorageGetType) => {
	localStorage.removeItem(key);
};

export const getLocalStorageItem = <T extends keyof LocalStorageGetType>(
	key: T
): LocalStorageGetType[T] | undefined => {
	try {
		const serializedData = localStorage.getItem(key);
		if (serializedData === null) {
			resetLocalStorage(key);
			return undefined;
		}
		return JSON.parse(serializedData);
	} catch {
		return undefined;
	}
};

export const setLocalStorage = <T extends keyof LocalStorageSetType>(
	key: T,
	value: LocalStorageSetType[T]
) => {
	const serializedData = JSON.stringify(value);
	localStorage.setItem(key, serializedData);
};
