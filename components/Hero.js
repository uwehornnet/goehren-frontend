import Link from "next/link";

const Hero = () => {
	return (
		<div className="w-full bg-slate-100 aspect-video flex flex-column items-end">
			<div className="container mx-auto py-16">
				<h2 className="text-2xl font-semibold mb-4">
					Hinaus auf die Ostsee ohne nass zu werden <br /> - Die Seebrücke im Ostseebad Göhren
				</h2>
				<p className="max-w-[400px]">
					Am Nordstrand, neben dem Kurplatz, befindet sich die 280 Meter lange Seebrücke Göhrens
				</p>
				<Link href="/">
					<a className="flex items-center gap-4 mt-8">
						<span>weiterlesen</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
							/>
						</svg>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
