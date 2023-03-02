interface CommandType {
	command: string;
	answer: string;
}
type TestType = string;

export type localStorageItemMap = { COMMAND: CommandType[]; TEST: TestType };

export type LocalStorageType = keyof localStorageItemMap;
export type LocalStorageValueType =  localStorageItemMap;
