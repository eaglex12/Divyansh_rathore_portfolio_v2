import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaGithub,
	FaPython,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiGraphql,
	SiDjango,
	SiSpringboot,
	SiMysql,
	SiPostgresql,
	SiNextdotjs,
	SiNestjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import { BsBootstrap, BsCodeSlash } from "react-icons/bs";
export const experiences = [
	{
		title: "Software Development Engineer",
		logo: "/Experience/basys_logo.png",
		company: "Basys.ai",
		period: "June 2024 - Current",
		description:
			"Developed an enterprise software solution to automate the Prior Authorization System in the US, significantly enhancing healthcare efficiency. Integrated ChatGPT, Claude.AI, and an in-house AI system, automating GPT model switching and reducing testing time by 80%. Implemented machine learning algorithms for optimized decision-making, and FHIR standards for secure, seamless data exchange, improving accuracy and interoperability. Technologies used: NextJS, NestJS, PostgreSQL, FHIR, and Spring Boot.",
	},
	{
		title: "Full Stack Developer Internship",
		logo: "/Experience/ooumph_logo.jfif",
		company: "MyOoumph Networks Pvt Ltd",
		period: "June 2023 - Dec 2023",
		description:
			"Implemented Django and GraphQL for backend, enabling smooth data handling. Employed ReactJS, Apollo Client, and CSS for engaging user interfaces. Used Postman API for robust backend testing. Proficient in Git and GitHub for collaborative development.",
	},
	{
		logo: "/Experience/shaadi_logo.png",
		title: "Bug Bounty Program",
		company: "Shaadi.com, India's No.1 Matchmaking and Matrimony Service",
		period: "May 2023 - June 2023",
		description:
			"Resolved a critical rendering issue at Shaadi.com, a leading online matchmaking platform renowned for connecting over 50 million lives. Leveraged front-end development expertise to identify and fix the bug through thorough code analysis and testing, significantly enhancing the user experience. Shaadi.com, known for its innovation-led approach, has redefined how Indian brides and grooms meet for marriage, offering trusted community-specific platforms such as TamilShaadi.com, TeluguShaadi.com, and more.",
	},
];

export const skills = [
	{ name: "HTML", icon: FaHtml5, color: "#E34F26" },
	{ name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
	{ name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
	{ name: "React", icon: FaReact, color: "#61DAFB" },
	{ name: "GitHub", icon: FaGithub, color: "#181717" },
	{ name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
	{ name: "GraphQL", icon: SiGraphql, color: "#E10098" },
	{ name: "Django", icon: SiDjango, color: "#092E20" },
	{ name: "Bootstrap", icon: BsBootstrap, color: "#7952B3" },
	{ name: "Python", icon: FaPython, color: "#3776AB" },
	{ name: "C++", icon: BsCodeSlash, color: "#00599C" },
	{ name: "MySQL", icon: SiMysql, color: "#4479A1" },
	{ name: "Next.js", icon: SiNextdotjs, color: "#000000" },
	{ name: "NestJS", icon: SiNestjs, color: "#E0234E" },
	{ name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
	{ name: "AWS", icon: FaAws, color: "#FF9900" },
	{ name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
];

export const Works = [
	{
		title: "AIFT - AI Insights on Financial Data",
		description:
			"Developed a SaaS platform using the MERN stack, integrated with Gemini AI for portfolio analysis, AI-powered calculators, and stock visualization. Enabled real-time notifications and report generation for financial advisory teams.",
		technologies: [
			"MERN Stack",
			"Gemini AI",
			"AWS S3",
			"AWS EC2",
			"Nginx",
			"socket.io",
			"Real-time Notifications",
		],
		github: "https://github.com/anubhav2102/aift-frontend",
		demo: "https://www.ai-ft.in/",
		images: Array.from(
			{ length: 6 },
			(_, index) => `/work/p1/${index + 1}.png?height=400&width=600`
		),
	},
	{
		title: "Apple Crafts",
		description:
			"Apple Crafts is an e-commerce platform built with a full-stack approach. It allows users to browse and purchase handcrafted products with a secure authentication system and real-time data handling.",
		technologies: [
			"Node.js",
			"Express.js",
			"React",
			"Redux",
			"MongoDB",
			"OAuth 2.0",
			"JSON Web Token",
			"AWS EC2",
		],
		github: "https://github.com/eaglex12/AppleCraft",
		images: Array.from(
			{ length: 1 },
			(_, index) => `/work/p2/${index + 1}.png?height=400&width=600`
		),
	},
	{
		title: "Algorithm Visualiser",
		description:
			"Algorithm Visualiser is a tool for visualizing various algorithms in action. It helps users understand algorithmic concepts through interactive and dynamic visual representations.",
		technologies: ["React", "Node", "React Inbuild Library"],
		github: "https://github.com/eaglex12/MY-ALGO-VIS",
		demo: "https://algo-vizzz.netlify.app/",
		images: Array.from(
			{ length: 6 },
			(_, index) => `/work/p3/${index + 1}.png?height=400&width=600`
		),
	},
	{
		title: "Blog Website",
		description:
			"The Blog Website project provides a platform for users to create, manage, and publish blog posts. It features a RESTful API backend for handling data and authentication, coupled with a React frontend.",
		technologies: ["React", "Node", "Express", "MongoDB"],
		github: "https://github.com/eaglex12/BLOG-BACKEND",
		images: Array.from(
			{ length: 1 },
			(_, index) => `/work/p4/${index + 1}.png?height=400&width=600`
		),
	},
	{
		title: "React Js Portfolio",
		description:
			"This portfolio website showcases various projects and skills using React and Tailwind CSS. It is designed to be a dynamic and responsive online resume for presenting professional achievements.",
		technologies: ["React", "Tailwind CSS"],
		github: "https://github.com/yourusername/react-portfolio",
		demo: "https://react-portfolio-demo.com",
		images: Array.from(
			{ length: 8 },
			(_, index) => `/work/p5/${index + 1}.png?height=400&width=600`
		),
	},
	{
		title: "Cover Letter Generator",
		description:
			"The Cover Letter Generator uses advanced AI to create and improve cover letters. It provides an intuitive interface for users to upload their letters and receive enhanced versions tailored to specific job applications.",
		technologies: [
			"React",
			"MUI",
			"Node.js",
			"Express",
			"Google Generative AI",
			"Axios",
		],
		github: "https://github.com/eaglex12/CoverLetterGenerator",
		images: Array.from(
			{ length: 7 },
			(_, index) => `/work/p6/${index + 1}.png?height=400&width=600`
		),
	},
];
