import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Event from "./Event";

const EventSLider = () => {
	return (
		<div className="overflow-hidden events relative my-16">
			<div className="container mx-auto">
				<Swiper
					spaceBetween={24}
					slidesPerView={4}
					className="overflow-visible"
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide className="aspect-portrait  p-4 flex flex-col justify-between">
						<h3 className="font-semibold">Veranstaltungen</h3>
						<ul className="tracking-loose">
							<li>
								<Link href="">
									<a className="flex items-center gap-4">
										<span>Highlights</span>
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
							</li>
							<li>
								<Link href="">
									<a className="flex items-center gap-4">
										<span>alle Veranstaltungen</span>
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
							</li>
						</ul>
					</SwiperSlide>
					<SwiperSlide className="">
						<Event />
					</SwiperSlide>
					<SwiperSlide className="">
						<Event />
					</SwiperSlide>
					<SwiperSlide className="">
						<Event />
					</SwiperSlide>
					<SwiperSlide className="">
						<Event />
					</SwiperSlide>
					<SwiperSlide className="">
						<Event />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default EventSLider;
