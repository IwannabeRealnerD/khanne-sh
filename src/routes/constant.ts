import { claerStorageArr } from "./util";

export const COMMAND_OBJ = {
	HELP: "help",
	ABOUT: "about",
	GITHUB: "github",
	BLOG: "blog",
	PWD: "pwd",
	CLEAR: "clear"
};

export const COMMAND_ACTIONS = {
	[COMMAND_OBJ.ABOUT]: () =>
		"khanne-sh is a terminal that has information about khanne(me). \n You can use 'help' command to see available commands.",
	[COMMAND_OBJ.HELP]: () =>
		"Here are commands that you can use: \n 1. about : to get information about this project. \n 2. github : open new tab for khanne's github \n 3. help : to see available commands \n 4. pwd : to see current url \n 5. clear : to clear history",
	[COMMAND_OBJ.GITHUB]: () => {
		window.open("https://github.com/IwannabeRealnerD");
		return "Redirecting to khanne's github repositories...";
	},
	[COMMAND_OBJ.BLOG]: () => {
		window.open("https://iwannaberealnerd.oopy.io/develog");
		return "Opening new tabs for khanne's blog...";
	},
	[COMMAND_OBJ.PWD]: () => window.location.href,
	[COMMAND_OBJ.CLEAR]: () => {
		claerStorageArr();
		return "khanne-sh history is cleared.";
	}
};
