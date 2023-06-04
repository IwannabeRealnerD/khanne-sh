export const resetLocalStorage = (key: string) => {
	localStorage.removeItem(key);
};

export const getLocalStorageItem = (key: string) => {
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

export const setLocalStorageItem = (key: string, value: unknown) => {
	const serializedData = JSON.stringify(value);
	localStorage.setItem(key, serializedData);
};
