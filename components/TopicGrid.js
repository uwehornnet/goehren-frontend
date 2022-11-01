import Link from "next/link";
const TopicGrid = () => {
	return (
		<div className="container mx-auto grid grid-cols-3 gap-4 my-16">
			<div className="col-span-1 aspect-square bg-slate-100 p-8 flex flex-col justify-between">
				<h3 className="text-xl font-semibold">Unsere Empfehlungen</h3>
				<div>
					<p>
						Im baby umami farm-to-table shoreditch leggings, crucifix VHS forage ennui small batch four
						dollar toast cray.
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
			<div className="col-span-1 aspect-square bg-slate-200 flex flex-col justify-end">
				<div className="bg-gradient-to-t from-neutral-400 text-white p-8">
					<h3 className="font-semibold">Kneipkurort</h3>
					<p>Gesundheit per Prädikat</p>
				</div>
			</div>
			<div className="col-span-1 aspect-square bg-slate-200 flex flex-col justify-end">
				<div className="bg-gradient-to-t from-neutral-400 text-white p-8">
					<h3 className="font-semibold">Kneipkurort</h3>
					<p>Gesundheit per Prädikat</p>
				</div>
			</div>
			<div className="col-span-2 bg-slate-200 flex flex-col justify-end">
				<div className="bg-gradient-to-t from-neutral-400 text-white p-8">
					<h3 className="font-semibold">Kneipkurort</h3>
					<p>Gesundheit per Prädikat</p>
				</div>
			</div>
			<div className="col-span-1 aspect-square bg-slate-200 flex flex-col justify-end">
				<div className="bg-gradient-to-t from-neutral-400 text-white p-8">
					<h3 className="font-semibold">Kneipkurort</h3>
					<p>Gesundheit per Prädikat</p>
				</div>
			</div>
		</div>
	);
};

export default TopicGrid;
