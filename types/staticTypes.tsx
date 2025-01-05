// Interface for Experience
export interface IExperience {
	title: string;
	company: string;
	period: string;
	description: string;
	logo: string;
}

// Interface for Work Project
export interface IWork {
	title: string;
	description: string;
	technologies: string[];
	github: string;
	demo?: string; // Optional as not all projects may have a demo link
	images: string[];
}
