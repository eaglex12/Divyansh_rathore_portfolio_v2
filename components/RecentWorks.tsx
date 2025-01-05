"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import { Works } from "@/utils/static";

const ImageCarousel = ({ images }: { images: string[] }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="relative">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{images.map((src, index) => (
						<div className="flex-[0_0_100%] min-w-0" key={index}>
							<Image
								src={src}
								alt={`Project image ${index + 1}`}
								width={600}
								height={400}
								className="w-full h-64 object-cover"
							/>
						</div>
					))}
				</div>
			</div>
			<Button
				onClick={scrollPrev}
				className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black border-2 border-black hover:bg-[#FFF700]"
				size="icon"
			>
				<ChevronLeft className="h-4 w-4" />
			</Button>
			<Button
				onClick={scrollNext}
				className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black border-2 border-black hover:bg-[#FFF700]"
				size="icon"
			>
				<ChevronRight className="h-4 w-4" />
			</Button>
		</div>
	);
};

const RecentWorks = () => {
	return (
		<section id="works" className="relative">
			<h2 className="text-4xl font-bold mb-6 bg-[#FFF700] inline-block px-2 transform rotate-1">
				Recent Works
			</h2>
			<p className="text-lg mb-6">
				During my experience as a self-taught developer, I have created many
				projects and shared them on LinkedIn and GitHub. I am always on the
				lookout for new and challenging projects to work on.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{Works.map((work, index) => (
					<Card
						key={index}
						className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
					>
						<div className="py-4">
							<ImageCarousel images={work.images} />
						</div>

						<CardHeader>
							<CardTitle className="text-2xl font-bold">{work.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="mb-4">{work.description}</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{work.technologies.map((tech, techIndex) => (
									<Badge
										key={techIndex}
										variant="secondary"
										className="bg-[#93DEFF] text-black border-2 border-black"
									>
										{tech}
									</Badge>
								))}
							</div>
							<div className="flex gap-4">
								<Button
									asChild
									variant="outline"
									className="border-2 border-black hover:bg-[#FF90E8]"
								>
									<Link
										href={work.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" /> GitHub
									</Link>
								</Button>
								{work.demo && (
									<Button
										asChild
										variant="outline"
										className="border-2 border-black hover:bg-[#93DEFF]"
									>
										<Link
											href={work.demo}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
										</Link>
									</Button>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default RecentWorks;
