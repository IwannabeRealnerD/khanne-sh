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
	about: "to get information about this project",
	blog: "open new window for khanne's blog",
	clear: "to clear history",
	contact: "to get khanne's contact",
	github: "open new window for khanne's github",
	help: "to see available commands",
	pwd: "to see current url"
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
		let commandOutput = "Here are commands that you can use: \n";
		Object.entries(HELP_COMMAND).forEach(([command, commandResult], index) => {
			commandOutput = commandOutput.concat(
				` ${index + 1}. ${command} : ${commandResult}\n`
			);
			console.log("here");
		});
		return commandOutput;
	},
	[COMMANDS.GITHUB]: () => {
		window.open("https://github.com/IwannabeRealnerD");
		return "Redirecting to khanne's github repositories...";
	},

	[COMMANDS.PWD]: () => window.location.href
};
