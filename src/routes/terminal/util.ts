export const checkDuplicatedCommand = (command: string, resultArr: string[]) => {
	if (resultArr.length < 3) return false;
	return resultArr.slice(3).some((result, index) => {
		result === resultArr[index] &&
			result === resultArr[index - 1] &&
			result === resultArr[index - 2];
	});
};
