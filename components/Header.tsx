"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
	return (
		<header className="border-b-4 border-black">
			<nav className="container mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold hover:underline">
						Welcome to My Portfolio
					</Link>
					<div className="hidden md:flex space-x-4">
						<NavLink href="#about">About</NavLink>
						<NavLink href="#skills">Skills</NavLink>
						<NavLink href="#experience">Experience</NavLink>
						<NavLink href="#works">Works</NavLink>
						<NavLink href="#contact">Contact</NavLink>
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="md:hidden">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent>
							<div className="flex flex-col space-y-4 mt-4">
								<NavLink href="#about">About</NavLink>
								<NavLink href="#skills">Skills</NavLink>
								<NavLink href="#experience">Experience</NavLink>
								<NavLink href="#works">Works</NavLink>
								<NavLink href="#contact">Contact</NavLink>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
};

const NavLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<Link href={href} className="font-medium hover:underline">
		{children}
	</Link>
);

export default Header;
