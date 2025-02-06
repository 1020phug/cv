import ContactPage from "@/app/contact/page";
import AboutPage from "@/app/about/page";
import BlogPage from "@/app/blog/page";

export const NAV_LINKS = [
	{
		path: "/contact",
		name: "Contact",
		component: <ContactPage />,
	},
	{
		path: "/about",
		name: "About",
		component: <AboutPage />,
	},
	{
		path: "/blog",
		name: "Blog",
		component: <BlogPage />,
	},
];
