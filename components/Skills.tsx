"use client";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/utils/static";

const Skills = () => {
	return (
		<section id="skills" className="relative">
			<h2 className="text-4xl font-bold mb-6 bg-[#FF90E8] inline-block px-2 transform rotate-1">
				Skills
			</h2>
			<p className="text-lg mb-6">
				I have used and worked with the following technologies in my projects.
			</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{skills.map((skill, index) => (
					<Badge
						key={index}
						variant="outline"
						className="text-lg py-2 border-2 border-black bg-white transition-colors  flex items-center justify-center gap-2 "
						style={{
							color: "white",
							backgroundColor: skill.color,
						}}
					>
						{skill.icon && <skill.icon className="w-5 h-5" />}
						{skill.name}
					</Badge>
				))}
			</div>
		</section>
	);
};

export default Skills;
