import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
	return (
		<footer className="bg-[#FF90E8] border-t-4 border-black py-8">
			<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0">
					© 2024 Divyansh Singh Rathore. All rights reserved.
				</div>
				<div className="flex space-x-4">
					<SocialLink
						href="https://github.com/eaglex12"
						icon={<Github />}
						label="GitHub"
					/>
					<SocialLink
						href="https://www.instagram.com/divyansh20132/"
						icon={<Instagram />}
						label="Instagram"
					/>
					<SocialLink
						href="https://www.linkedin.com/in/divyansh-singh-rathore-4934b8203/"
						icon={<Linkedin />}
						label="LinkedIn"
					/>
				</div>
			</div>
		</footer>
	);
};

const SocialLink = ({
	href,
	icon,
	label,
}: {
	href: string;
	icon: React.ReactNode;
	label: string;
}) => (
	<Button variant="outline" size="icon" asChild>
		<Link href={href} target="_blank" rel="noopener noreferrer">
			<span className="sr-only">{label}</span>
			{icon}
		</Link>
	</Button>
);

export default Footer;
