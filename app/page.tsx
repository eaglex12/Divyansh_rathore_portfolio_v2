import { About } from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import RecentWorks from "@/components/RecentWorks";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";
import Grid from "@/components/Grid";

export default function Home() {
	return (
		<main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
			<div>
				<FloatingNav navItems={navItems} />
				<About />
				<Grid />
				<Skills />
				<Experience />
				<RecentWorks />
				<Contact />
			</div>
		</main>
	);
}
