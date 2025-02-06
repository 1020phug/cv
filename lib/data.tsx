import Home from "@/app/page";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

export const NAV_LINKS = [
	{
		path: "/home",
		name: "Home",
		component: <Home />,
	},
	{
		path: "/contact",
		name: "Contact",
		component: <Contact />,
	},
	{
		path: "/about",
		name: "About",
		component: <About />,
	},
];
