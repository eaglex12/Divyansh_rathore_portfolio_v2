"use client";
import { useState } from "react";
import type React from "react";

import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import animationData from "@/lib/confetti.json";
import { BackgroundGradientAnimation } from "./Gradientbg";
import LitupButton from "./LitupButton";
import MagicButton from "./MagicButton";
import { SparklesCore } from "./sparkles";
import createGlobe from "cobe";
import { useRef, useEffect } from "react";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const [copied, setCopied] = useState(false);

	const defaultOptions = {
		loop: copied,
		autoplay: copied,
		animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleCopy = () => {
		const text = "divyanshsrathore@gmail.com";
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	const Globe = ({ className }: { className?: string }) => {
		const canvasRef = useRef<HTMLCanvasElement>(null);

		useEffect(() => {
			let phi = 0;

			if (!canvasRef.current) return;

			const globe = createGlobe(canvasRef.current, {
				devicePixelRatio: 2,
				width: 600 * 2,
				height: 600 * 2,
				phi: 0,
				theta: 0,
				dark: 1,
				diffuse: 1.2,
				mapSamples: 16000,
				mapBrightness: 6,
				baseColor: [0.3, 0.3, 0.3],
				markerColor: [0.1, 0.8, 1],
				glowColor: [0, 0, 0],
				markers: [
					// longitude latitude
					{ location: [37.7595, -122.4367], size: 0.03 },
					{ location: [40.7128, -74.006], size: 0.1 },
				],
				onRender: (state) => {
					// Called on every animation frame.
					// `state` will be an empty object, return updated params.
					state.phi = phi;
					phi += 0.01;
				},
			});

			return () => {
				globe.destroy();
			};
		}, []);

		return (
			<canvas
				ref={canvasRef}
				style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
				className={className}
			/>
		);
	};

	return (
		<>
			<div
				className={cn(
					"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]",
					className
				)}
				style={{
					background: "rgb(4,7,29)",
					backgroundColor:
						"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
				}}
			>
				<div className={`${id === 6 && "flex justify-center"} h-full`}>
					<div className="w-full h-full absolute">
						{img && (
							<img
								src={img || "/placeholder.svg"}
								alt={img}
								className={cn(imgClassName, "object-cover object-center ")}
							/>
						)}
					</div>
					<div
						className={`absolute right-0 -bottom-5 ${
							id === 5 && "w-full opacity-80"
						} `}
					>
						{spareImg && (
							<>
								<img
									src={spareImg || "/placeholder.svg"}
									alt={spareImg}
									className="object-cover object-center w-full h-full"
								/>
							</>
						)}
					</div>
					{id === 6 && (
						<BackgroundGradientAnimation>
							<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
						</BackgroundGradientAnimation>
					)}

					<div
						className={cn(
							titleClassName,
							"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
						)}
					>
						<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#E2E8F0] z-10">
							{description}
						</div>

						<div
							className={`font-sans text-xl lg:text-4xl max-w-96 font-bold z-10 text-white`}
						>
							{title}
						</div>

						{id === 2 && <Globe />}

						{id === 3 && (
							<>
								<SparklesCore
									id="tsparticlesfullpage"
									background="transparent"
									minSize={0.6}
									maxSize={1.4}
									particleDensity={100}
									className="w-full h-full"
									particleColor="#FFFFFF"
								/>
								<div className="flex gap-4">
									<a
										href="https://drive.google.com/file/d/1udileHqcrbD09gjuFpUZlHgpOajw3UU_/view?usp=sharing"
										target="_blank"
										rel="noreferrer"
									>
										<div className="z-10">
											<LitupButton name="View Resume" />
										</div>
									</a>
									<a
										href="https://contra.com/akash_jana"
										target="_blank"
										rel="noreferrer"
									>
										<div className="z-10">
											<LitupButton name="Freelance" />
										</div>
									</a>
								</div>
							</>
						)}
						{id === 6 && (
							<div className="mt-5 relative">
								<div
									className={`absolute -bottom-5 right-0 ${
										copied ? "block" : "block"
									}`}
								>
									<Lottie options={defaultOptions} height={200} width={400} />
								</div>

								<MagicButton
									title={copied ? "Email is Copied!" : "Copy my email address"}
									icon={<IoCopyOutline />}
									position="left"
									handleClick={handleCopy}
									otherClasses="!bg-[#161A31]"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
