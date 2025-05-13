"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";

export const About = () => {
	const words = [
		{
			text: "Code",
		},
		{
			text: "Maverick",
		},
		{
			text: "&",
			className: "text-purple-500 dark:text-purple-400",
		},
		{
			text: "Builder",
			className: "text-purple-500 dark:text-purple-400",
		},
	];

	return (
		<div id="home" className="relative min-h-screen w-full bg-black text-white">
			{/* Background effects */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />
				<Spotlight
					className="-top-40 left-0 md:left-60 opacity-20"
					fill="purple"
				/>
				<Spotlight
					className="-top-40 right-0 md:right-60 opacity-20"
					fill="blue"
				/>
			</div>

			{/* Content container - now using flex-row for side-by-side layout */}
			<div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-16 lg:gap-24"
				>
					{/* Left side: Profile image and name */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="flex flex-col items-center md:sticky md:top-24"
					>
						{/* Profile image with glow effect */}
						<div className="relative mb-6">
							<div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 blur-sm" />
							<img
								src="/About/Me.jpeg"
								alt="Divyansh Singh Rathore"
								className="relative h-64 w-64 rounded-full border-2 border-purple-500/50 object-cover"
							/>
						</div>

						{/* Name */}
						<h2 className="text-center text-sm font-light uppercase tracking-[0.2em] text-gray-400">
							Divyansh Singh Rathore
						</h2>
					</motion.div>

					{/* Right side: Typewriter, bio and button */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex flex-col items-center md:items-start md:pt-12"
					>
						{/* Typewriter effect */}
						<div className="mb-6 md:mb-8">
							<TypewriterEffect
								className="text-center text-4xl font-bold md:text-left md:text-5xl lg:text-6xl"
								words={words}
							/>
						</div>

						{/* Bio */}
						<p className="mb-8 max-w-xl text-center text-lg font-light leading-relaxed text-gray-300 md:text-left md:text-xl">
							Hi, I&apos;m Divyansh, a proficient Web Developer and AI
							Enthusiast passionate about creating innovative digital
							experiences.
						</p>

						{/* Button */}
						<MagicButton
							title="Lets Connect"
							icon={<FaLocationArrow />}
							position="right"
							handleClick={() => {
								window.open(
									"https://www.linkedin.com/in/divyansh-singh-rathore-4934b8203/",
									"_blank"
								);
							}}
						></MagicButton>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};
