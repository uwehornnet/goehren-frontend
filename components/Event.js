import Link from "next/link";

const Event = () => {
	return (
		<Link href="">
			<a>
				<div className=" aspect-portrait mb-4 flex flex-col justify-end relative">
					<img src="" alt="" className="absolute w-full h-full bg-slate-200" />
					<div className="p-4 bg-white aspect-square w-[100px] relative">
						<p className="text-5xl">12.</p>
						<small>Feb 2022</small>
					</div>
				</div>
				<h3>Wald erleben mit allen Sinnen</h3>
			</a>
		</Link>
	);
};

export default Event;
