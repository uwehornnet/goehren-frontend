import Link from "next/link";

const Accomodation = () => {
	return (
		<div className="col-span-1 relative">
			<div className="relative mb-4">
				<div className="absolute top-2 left-2 bg-white p-2 flex items-center gap-4 text-sm rounded-md text-slate-400">
					<span>
						<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M14.657 14.657L10.414 18.9C10.2284 19.0857 10.0081 19.2331 9.76556 19.3336C9.52303 19.4342 9.26305 19.4859 9.0005 19.4859C8.73796 19.4859 8.47798 19.4342 8.23544 19.3336C7.99291 19.2331 7.77256 19.0857 7.587 18.9L3.343 14.657C2.22422 13.5382 1.46234 12.1127 1.15369 10.5609C0.845043 9.00902 1.00349 7.40051 1.60901 5.93873C2.21452 4.47694 3.2399 3.22754 4.55548 2.3485C5.87107 1.46947 7.41777 1.00029 9 1.00029C10.5822 1.00029 12.1289 1.46947 13.4445 2.3485C14.7601 3.22754 15.7855 4.47694 16.391 5.93873C16.9965 7.40051 17.155 9.00902 16.8463 10.5609C16.5377 12.1127 15.7758 13.5382 14.657 14.657V14.657Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9V9Z"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
					<span>Ostseebad Göhren</span>
				</div>
				<img src="" alt="" className="w-full aspect-square bg-slate-200" />
			</div>
			<div className="p-2">
				<Link href="">
					<h2 className="text-medium leading-tight mb-4">Strandresidenz Brandenburg - ca. 150m zum Meer</h2>
				</Link>

				<div className="flex items-center justify-between">
					<p className="flex items-center gap-2">
						<span>
							<svg
								width="16"
								height="15"
								viewBox="0 0 16 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.04897 0.927017C7.34897 0.00601709 8.65197 0.00601709 8.95097 0.927017L10.021 4.21902C10.0863 4.41951 10.2134 4.5942 10.384 4.71812C10.5547 4.84205 10.7601 4.90886 10.971 4.90902H14.433C15.402 4.90902 15.804 6.14902 15.021 6.71902L12.221 8.75302C12.05 8.87705 11.9227 9.05203 11.8573 9.25287C11.7919 9.45371 11.7918 9.6701 11.857 9.87102L12.927 13.163C13.227 14.084 12.172 14.851 11.387 14.281L8.58697 12.247C8.41618 12.123 8.21053 12.0562 7.99947 12.0562C7.78842 12.0562 7.58277 12.123 7.41197 12.247L4.61197 14.281C3.82797 14.851 2.77397 14.084 3.07297 13.163L4.14297 9.87102C4.20815 9.6701 4.20803 9.45371 4.14264 9.25287C4.07725 9.05203 3.94994 8.87705 3.77897 8.75302L0.979974 6.72002C0.196974 6.15002 0.599974 4.91002 1.56797 4.91002H5.02897C5.24002 4.91007 5.44568 4.84336 5.6165 4.71942C5.78732 4.59548 5.91455 4.42067 5.97997 4.22002L7.04997 0.928017L7.04897 0.927017Z"
									fill="#FFF50E"
								/>
							</svg>
						</span>
						<span>4,8 / 178 Bewertungen</span>
					</p>
					<p>
						ab <span className="font-medium">59,80€</span>/Nacht
					</p>
				</div>
			</div>
		</div>
	);
};

export default Accomodation;
