import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";

const Header = () => {
	return (
		<div className="left-0 right-0 top-0 mt-4 max-w-screen-lg mx-auto absolute z-10">
			<ul className="max-w-screen-sm mx-auto flex justify-center items-center gap-8 py-4 border-1 rounded-md shadow-lg backdrop-blur-sm bg-transparent">
				{NAV_LINKS.map((link, idx) => {
					return (
						<li
							key={idx}
							className="relative after:content-[''] after:block after:h-1 after:origin-right after:-bottom-1 after:absolute hover:after:w-full hover:after:transition-all hover:after:origin-left after:left-0 after:scale-x-0 after:right-0 hover:after:scale-x-100 after:bg-gradient-to-r after:from-primary after:to-accent"
						>
							<Link href={link.path}>{link.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Header;
