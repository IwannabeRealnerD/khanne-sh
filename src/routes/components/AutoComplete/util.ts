export const findNextIndex = (targetArray: unknown[], currentIndex: number) => {
	return targetArray.length - 1 <= currentIndex ? 0 : currentIndex + 1;
};

export const findPreviousIndex = (
	targetArray: unknown[],
	currentIndex: number
) => {
	return currentIndex - 1 < 0 ? targetArray.length - 1 : currentIndex - 1;
};
