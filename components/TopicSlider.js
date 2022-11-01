import { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TopicSlider = () => {
	const next = useRef();
	const prev = useRef();
	return (
		<div className="relative w-full ">
			<Swiper
				className="relative"
				modules={[Navigation]}
				spaceBetween={24}
				slidesPerView={1}
				navigation={{
					nextEl: next.current,
					prevEl: prev.current,
				}}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = prev.current;
					swiper.params.navigation.nextEl = next.current;
				}}
			>
				<SwiperSlide className="w-full  aspect-video bg-slate-200 flex items-end overflow-hidden">
					<div className="container mx-auto relative">
						<div className="aspect-square bg-white p-8 max-w-[30%] flex flex-col justify-between relative">
							<span className="bg-white h-full top-0 left-0 w-screen absolute -translate-x-full"></span>
							<div className="">
								<h2 className="text-medium">Speckbusch</h2>
								<p>Viel Aussicht mit viel Natur.</p>
							</div>
							<div className="">
								<p>
									Ein wunderschöner Aussichtspunkt befindet sich am Hügelgrab Speckbusch. Das
									Hügelgrab liegt auf einer Anhöhe, neben der Kirche unter einer alten Baumgruppe.
								</p>
								<a href="/" className="flex items-center gap-2 group mt-4 font-medium">
									<span>mehr erfahren</span>
									<span>
										<svg
											width="20"
											height="10"
											viewBox="0 0 20 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="block group-hover:translate-x-4"
										>
											<path
												d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z"
												stroke="black"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full  aspect-video bg-slate-200 flex items-end overflow-hidden">
					<div className="container mx-auto relative">
						<div className="aspect-square bg-white p-8 max-w-[30%] flex flex-col justify-between relative">
							<span className="bg-white h-full top-0 left-0 w-screen absolute -translate-x-full"></span>
							<div className="">
								<h2 className="text-medium">Speckbusch</h2>
								<p>Viel Aussicht mit viel Natur.</p>
							</div>
							<div className="">
								<p>
									Ein wunderschöner Aussichtspunkt befindet sich am Hügelgrab Speckbusch. Das
									Hügelgrab liegt auf einer Anhöhe, neben der Kirche unter einer alten Baumgruppe.
								</p>
								<a href="/" className="flex items-center gap-2 group mt-4 font-medium">
									<span>mehr erfahren</span>
									<span>
										<svg
											width="20"
											height="10"
											viewBox="0 0 20 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="block group-hover:translate-x-4"
										>
											<path
												d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z"
												stroke="black"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-full  aspect-video bg-slate-200 flex items-end overflow-hidden">
					<div className="container mx-auto relative">
						<div className="aspect-square bg-white p-8 max-w-[30%] flex flex-col justify-between relative">
							<span className="bg-white h-full top-0 left-0 w-screen absolute -translate-x-full"></span>
							<div className="">
								<h2 className="text-medium">Speckbusch</h2>
								<p>Viel Aussicht mit viel Natur.</p>
							</div>
							<div className="">
								<p>
									Ein wunderschöner Aussichtspunkt befindet sich am Hügelgrab Speckbusch. Das
									Hügelgrab liegt auf einer Anhöhe, neben der Kirche unter einer alten Baumgruppe.
								</p>
								<a href="/" className="flex items-center gap-2 group mt-4 font-medium">
									<span>mehr erfahren</span>
									<span>
										<svg
											width="20"
											height="10"
											viewBox="0 0 20 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="block group-hover:translate-x-4"
										>
											<path
												d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z"
												stroke="black"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<div className="swiper-navigation absolute bottom-0 left-0 w-full z-[50]">
					<div className="container mx-auto flex relative">
						<div className="ml-[30%] flex ">
							<div
								ref={prev}
								className="swiper-prev aspect-square bg-white flex items-center justify-center p-6 cursor-pointer"
							>
								<svg
									className="pointer-events-none"
									width="40"
									height="32"
									viewBox="0 0 40 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.25 16.0001H38.75M15.8333 30.5834L1.25 16.0001L15.8333 30.5834ZM1.25 16.0001L15.8333 1.41675L1.25 16.0001Z"
										stroke="black"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div
								ref={next}
								className="swiper-next aspect-square bg-white flex items-center justify-center p-6 cursor-pointer"
							>
								<svg
									className="pointer-events-none"
									width="40"
									height="32"
									viewBox="0 0 40 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M38.75 16.0001H1.25M24.1667 30.5834L38.75 16.0001L24.1667 30.5834ZM38.75 16.0001L24.1667 1.41675L38.75 16.0001Z"
										stroke="black"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</Swiper>
		</div>
	);
};

export default TopicSlider;
