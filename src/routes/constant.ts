import { makeHelpOutput } from "./util";

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
type HELP_OUTPUT_DEF = { [P in TCommandValues]: string };

export const HELP_COMMAND: HELP_OUTPUT_DEF = {
	about: "Get information about this project",
	blog: "Open new window for khanne's blog",
	clear: "Clear history",
	contact: "Get khanne's contact information",
	github: "Open new window for khanne's GitHub",
	help: "Display available commands",
	pwd: "Show current URL"
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
	[COMMANDS.HELP]: () => {
		return makeHelpOutput();
	},
	[COMMANDS.GITHUB]: () => {
		window.open("https://github.com/IwannabeRealnerD");
		return "Redirecting to khanne's github repositories...";
	},

	[COMMANDS.PWD]: () => window.location.href
};
