import { User, FolderGit2, Mail } from "lucide-react";

export const navItems = [
	{
		name: "About",
		link: "#about",
		icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
	},
	{
		name: "Projects",
		link: "#projects",
		icon: <FolderGit2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
	},
	{
		name: "Contact",
		link: "#contact",
		icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
	},
];

export const gridItems = [
	{
		id: 1,
		title:
			"I prioritize team/client collaboration, fostering open communication",
		description: "",
		className:
			"md:col-span-3 lg:col-span-3 md:row-span-4 lg:row-span-4 h-[10vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/About/b1.jpeg",
		spareImg: "",
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className:
			"md:col-span-3 lg:col-span-2 md:row-span-2 lg:row-span-2 h-[2vh]",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "Hire me",
		description: "Are you hiring? Check out",
		className:
			"md:col-span-3 lg:col-span-2 md:row-span-2 lg:row-span-2 h-[5vh]",
		imgClassName: "",
		titleClassName: "justify-end",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className:
			"md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2 h-[15vh]",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/About/b2.jpeg",
	},
	{
		id: 5,
		title: "Clean Code and Modern Design",
		description: "Passionate about transforming ideas into reality.",
		className:
			"md:col-span-4 lg:col-span-3 md:row-span-2 lg:row-span-2 min-h-[15vh]",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className:
			"md:col-span-6 lg:col-span-5 md:row-span-1 lg:row-span-1 min-h-[10vh]",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];
