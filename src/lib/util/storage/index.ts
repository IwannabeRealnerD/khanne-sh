import type { LocalStorageGetType, LocalStorageSetType } from "./type";

import { prerender } from "$/routes/+layout";

import { COMMANDS } from "$/routes/constant";
prerender;
COMMANDS;

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

export const setLocalStorageItem = <T extends keyof LocalStorageSetType>(
	key: T,
	value: LocalStorageSetType[T]
) => {
	const serializedData = JSON.stringify(value);
	localStorage.setItem(key, serializedData);
};
