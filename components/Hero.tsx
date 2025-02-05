import { GridBackground } from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
			</div>
			<GridBackground />
			<div className="flex justify-center items-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
						Build by 1020phug
					</h2>
					<TextGenerateEffect
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
						words="Welcome to Tenzo Production"
					/>
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi, my name is 1020phug a.k.a Tenzo
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
