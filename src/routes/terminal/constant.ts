export const COMMAND_OBJ = {
	HELP: "help",
	ABOUT: "about",
	GITHUB: "github"
};

type CommandObjType = keyof typeof COMMAND_OBJ;
