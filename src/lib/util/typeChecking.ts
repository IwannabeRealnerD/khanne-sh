export const isStringArray = (string: string): boolean => {
	try {
		const parsedValue = JSON.parse(string);

		if (!Array.isArray(parsedValue)) {
			return false;
		}
		return parsedValue.every((item: unknown) => typeof item === "string");
	} catch {
		return false;
	}
};
