import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import RecentWorks from "@/components/RecentWorks";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<div className="container mx-auto px-6 py-12 space-y-24">
			<About />
			<Skills />
			<Experience />
			<RecentWorks />
			<Contact />
		</div>
	);
}
