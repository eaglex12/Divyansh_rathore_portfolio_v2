"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/lib/data";
import { motion } from "framer-motion";

const Grid = () => {
	return (
		<section id="about" className="py-16">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="container mx-auto px-4"
			>
				<h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
				<BentoGrid>
					{gridItems.map(
						({
							id,
							title,
							titleClassName,
							description,
							className,
							img,
							imgClassName,
							spareImg,
						}) => (
							<BentoGridItem
								id={id}
								key={id}
								title={title}
								titleClassName={titleClassName}
								description={description}
								className={className}
								img={img}
								imgClassName={imgClassName}
								spareImg={spareImg}
							/>
						)
					)}
				</BentoGrid>
			</motion.div>
		</section>
	);
};

export default Grid;
