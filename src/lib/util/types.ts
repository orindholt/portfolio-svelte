export type Svg = {
	viewBox: string;
	path: string | string[];
};

export interface Skill {
	name?: string;
	backgroundColor: string;
	logoColor: string | string[];
	standaloneColor: string;
	textColor?: string;
	svg: Svg;
}

export interface Experience {
	title: string;
	company: string;
	companyLink: string;
	startDate: Date;
	endDate: Date | null;
	description: string;
}

export interface Project {
	title: string;
	slug: string;
	description: string;
	link?: string;
	repo?: string;
	tags: Skill[];
	startDate?: Date;
}

export type ButtonType = "button" | "submit" | "reset";
