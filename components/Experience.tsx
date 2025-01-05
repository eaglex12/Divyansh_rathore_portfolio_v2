"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/utils/static";
import Image from "next/image";

const Experience = () => {
	return (
		<section id="experience" className="relative">
			<h2 className="text-4xl font-bold mb-6 bg-[#93DEFF] inline-block px-2 transform -rotate-1">
				Experience
			</h2>
			<p className="text-lg mb-6">
				Experienced professional with a proven track record of success
			</p>
			<div className="space-y-6">
				{experiences.map((exp, index) => (
					<Card
						key={index}
						className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
					>
						<CardHeader className="flex flex-row items-center gap-4">
							<Image
								src={exp.logo}
								alt={`${exp.company} logo`}
								width={150}
								height={150}
								className=" border-2 border-black"
							/>
							<div>
								<CardTitle className="text-2xl font-bold">
									{exp.title}
								</CardTitle>
								<p className="font-semibold">{exp.company}</p>
							</div>
						</CardHeader>
						<CardContent>
							<p className="font-semibold mb-4 ">{exp.period}</p>
							<p className="font-semibold  ">{exp.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Experience;
