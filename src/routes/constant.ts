export const COMMANDS = {
	ABOUT: "about",
	BLOG: "blog",
	CLEAR: "clear",
	CONTACT: "contact",
	GITHUB: "github",
	HELP: "help",
	PWD: "pwd"
} as const;

type TCommandKeys = keyof typeof COMMANDS;
export type TCommandValues = (typeof COMMANDS)[TCommandKeys];
type COMMAND_ACTIONS_DEF = {
	[P in TCommandValues]: () => string;
};

export const COMMAND_ACTIONS: COMMAND_ACTIONS_DEF = {
	[COMMANDS.ABOUT]: () =>
		"khanne-sh is a terminal that has information about khanne(me). \n You can use 'help' command to see available commands.",
	[COMMANDS.BLOG]: () => {
		window.open("https://iwannaberealnerd.oopy.io/develog");
		return "Opening new tabs for khanne's blog...";
	},
	[COMMANDS.CLEAR]: () => {
		return "";
	},
	[COMMANDS.CONTACT]: () => {
		return "- Email: iwannaberealnerd@gmail.com\n- Phone Number: +821051200592\n- LinkedIn: www.linkedin.com/in/honggwanjeong";
	},
	[COMMANDS.HELP]: () =>
		"Here are commands that you can use: \n 1. about : to get information about this project. \n 2. github : open new tab for khanne's github \n 3. help : to see available commands \n 4. pwd : to see current url \n 5. clear : to clear history",
	[COMMANDS.GITHUB]: () => {
		window.open("https://github.com/IwannabeRealnerD");
		return "Redirecting to khanne's github repositories...";
	},

	[COMMANDS.PWD]: () => window.location.href
};
