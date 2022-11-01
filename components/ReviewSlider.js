import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ReviewSlider = () => {
	return (
		<div className="bg-[#F4F9F9] py-16">
			<div className="container mx-auto relative">
				<div className="absolute right-0 -top-24">
					<svg width="262" height="213" viewBox="0 0 262 213" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M57.6 107.6C63.2 103.2 70.6 101 79.8 101C89 101 96.6 106 102.6 116C108.6 126 111.6 140.2 111.6 158.6C111.6 176.6 107.8 190.2 100.2 199.4C92.6 208.2 77.8 212.6 55.8 212.6C34.2 212.6 17 206.2 4.2 193.4C1.4 179 0 162.2 0 143C0 79.7999 17.6 32.1999 52.8 0.199951L97.8 36.2C74.6 55.3999 60.4 78.7999 55.2 106.4L57.6 107.6ZM207.6 107.6C213.2 103.2 220.6 101 229.8 101C239 101 246.6 106 252.6 116C258.6 126 261.6 140.2 261.6 158.6C261.6 176.6 257.8 190.2 250.2 199.4C242.6 208.2 227.8 212.6 205.8 212.6C184.2 212.6 167 206.2 154.2 193.4C151.4 179 150 162.2 150 143C150 79.7999 167.6 32.1999 202.8 0.199951L247.8 36.2C224.6 55.3999 210.4 78.7999 205.2 106.4L207.6 107.6Z"
							fill="#93A5A5"
							fillOpacity="0.05"
						/>
					</svg>
				</div>

				<div className="block">
					<h2 className="mb-16 text-[#465352] text-medium">Meinungen unserer Urlaubsgäste</h2>

					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						spaceBetween={24}
						slidesPerView={1}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide className="">
							<div className=" max-w-[780px] mx-auto px-4">
								<p className="text-medium text-[#93A5A5]">
									Sehr freundliche und angenehme Atmosphäre in der Touristennfo. Wir saßen gemütlich
									kurz in der Bibliothek und schrieben die eben gekauften Ansichtskarten. Hier fühlte
									man sich gut aufgehoben und es war sogar am Samstag geöffnet.
								</p>
								<small className="block mt-8">Heinz Schenk</small>
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className=" max-w-[780px] mx-auto">
								<p className="text-medium text-[#93A5A5]">
									Sehr freundliche und angenehme Atmosphäre in der Touristennfo. Wir saßen gemütlich
									kurz in der Bibliothek und schrieben die eben gekauften Ansichtskarten. Hier fühlte
									man sich gut aufgehoben und es war sogar am Samstag geöffnet.
								</p>
								<small className="block mt-8">Heinz Schenk</small>
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className=" max-w-[780px] mx-auto">
								<p className="text-medium text-[#93A5A5]">
									Sehr freundliche und angenehme Atmosphäre in der Touristennfo. Wir saßen gemütlich
									kurz in der Bibliothek und schrieben die eben gekauften Ansichtskarten. Hier fühlte
									man sich gut aufgehoben und es war sogar am Samstag geöffnet.
								</p>
								<small className="block mt-8">Heinz Schenk</small>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default ReviewSlider;
