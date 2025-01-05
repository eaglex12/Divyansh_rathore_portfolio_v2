"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
	return (
		<section id="about" className="relative">
			<h2 className="text-4xl font-bold mb-6 bg-[#FFF700] inline-block px-2 transform -rotate-1">
				About Me
			</h2>
			<div className="flex flex-col md:flex-row gap-8">
				<Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:w-1/3 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow">
					<CardContent className="p-6">
						<div className="relative w-full aspect-square mb-4">
							<Image
								src="/About/Me.jpeg?height=400&width=400"
								alt="Divyansh Singh Rathore"
								layout="fill"
								objectFit="cover"
								className="rounded-full border-4 border-black"
							/>
						</div>
						<h3 className="text-2xl font-bold text-center">
							Divyansh Singh Rathore
						</h3>
						<p className="text-xl font-semibold text-center mb-4">
							Software Developer
						</p>
					</CardContent>
				</Card>
				<Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:w-2/3 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow">
					<CardContent className="p-6 font-bold">
						<p className="text-lg mb-4 ">
							Hello, it&apos;s a pleasure to meet you all. I am a passionate
							Software Development Engineer with a robust foundation in computer
							science and engineering, currently working at basys.ai. My
							experience spans developing innovative software solutions,
							including integrating advanced AI systems and automating processes
							to enhance efficiency.
						</p>
						<p className="text-lg mb-4">
							With hands-on experience in full-stack development, I have
							successfully contributed to projects that improve user experiences
							and streamline complex workflows. I am driven by a strong
							commitment to solving challenging problems and am eager to bring
							my technical expertise and enthusiasm for innovation to new and
							exciting projects.
						</p>
						<p className="text-lg mb-6">
							As a proficient full-stack developer, I harness a comprehensive
							skill set that encompasses both backend and frontend technologies.
							Alongside my prowess in development, I boast a solid foundation in
							Data Structures and Algorithms, enabling me to engineer robust and
							efficient solutions.
						</p>
						<Button
							onClick={() => {
								window.open(
									"https://drive.google.com/file/d/1aqCdw3Z6T3z58b1VWMwL36KMXgN1b8WW/view"
								);
							}}
						>
							<h2 className="text-2xl font-bold mb-6 bg-[#FF90E8] hover:bg-[#FF69B4] inline-block px-2 transform -rotate-1 border-2 border-black">
								Check out My Resume
							</h2>
						</Button>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default About;
