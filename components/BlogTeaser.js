import Link from "next/link";

const BlogTeaser = () => {
	return (
		<div className="w-full bg-[#F2F6F9] py-16">
			<div className="container mx-auto">
				<div className="flex items-center justify-between mb-16">
					<h2 className="text-medium">
						Unsere Geschichten <br /> und Neuigkeiten
					</h2>

					<Link href="/">
						<a className="flex items-center gap-2 group mt-4 font-medium">
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
					</Link>
				</div>

				<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
					<div className="col-span-1">
						<div className="w-full">
							<img src="/" alt="" className="w-full aspect-square bg-slate-200" />
						</div>

						<div className="flex items-center gap-8 text-slate-400 text-sm my-6">
							<p className="flex items-center gap-2">
								<span>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.33333 3.66667V1V3.66667ZM9.66667 3.66667V1V3.66667ZM3.66667 6.33333H10.3333H3.66667ZM2.33333 13H11.6667C12.0203 13 12.3594 12.8595 12.6095 12.6095C12.8595 12.3594 13 12.0203 13 11.6667V3.66667C13 3.31304 12.8595 2.97391 12.6095 2.72386C12.3594 2.47381 12.0203 2.33333 11.6667 2.33333H2.33333C1.97971 2.33333 1.64057 2.47381 1.39052 2.72386C1.14048 2.97391 1 3.31304 1 3.66667V11.6667C1 12.0203 1.14048 12.3594 1.39052 12.6095C1.64057 12.8595 1.97971 13 2.33333 13Z"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span>12.10.2022</span>
							</p>
							<p className="flex items-center gap-2">
								<span>
									<svg
										width="12"
										height="14"
										viewBox="0 0 12 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.66665 3.66667C8.66665 4.37391 8.3857 5.05219 7.8856 5.55229C7.3855 6.05238 6.70722 6.33333 5.99998 6.33333C5.29274 6.33333 4.61446 6.05238 4.11436 5.55229C3.61426 5.05219 3.33331 4.37391 3.33331 3.66667C3.33331 2.95942 3.61426 2.28115 4.11436 1.78105C4.61446 1.28095 5.29274 1 5.99998 1C6.70722 1 7.3855 1.28095 7.8856 1.78105C8.3857 2.28115 8.66665 2.95942 8.66665 3.66667V3.66667ZM5.99998 8.33333C4.7623 8.33333 3.57532 8.825 2.70015 9.70017C1.82498 10.5753 1.33331 11.7623 1.33331 13H10.6666C10.6666 11.7623 10.175 10.5753 9.29981 9.70017C8.42464 8.825 7.23766 8.33333 5.99998 8.33333V8.33333Z"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span>Ostseebad Göhren</span>
							</p>
						</div>

						<h2 className="mb-3 font-medium">Viel los im Ostseebad Göhren Rückblick und Ausblick</h2>
						<p>Der Urlaubssommer im Ostseebad Göhren ist beendet und der Herbst ist in vollem Gange.</p>
						<Link href="/">
							<a className="flex items-center gap-2 group mt-6 font-medium">
								<span>weiterlesen</span>
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
						</Link>
					</div>
					<div className="col-span-1">
						<div className="w-full">
							<img src="/" alt="" className="w-full aspect-square bg-slate-200" />
						</div>

						<div className="flex items-center gap-8 text-slate-400 text-sm my-6">
							<p className="flex items-center gap-2">
								<span>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.33333 3.66667V1V3.66667ZM9.66667 3.66667V1V3.66667ZM3.66667 6.33333H10.3333H3.66667ZM2.33333 13H11.6667C12.0203 13 12.3594 12.8595 12.6095 12.6095C12.8595 12.3594 13 12.0203 13 11.6667V3.66667C13 3.31304 12.8595 2.97391 12.6095 2.72386C12.3594 2.47381 12.0203 2.33333 11.6667 2.33333H2.33333C1.97971 2.33333 1.64057 2.47381 1.39052 2.72386C1.14048 2.97391 1 3.31304 1 3.66667V11.6667C1 12.0203 1.14048 12.3594 1.39052 12.6095C1.64057 12.8595 1.97971 13 2.33333 13Z"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span>12.10.2022</span>
							</p>
							<p className="flex items-center gap-2">
								<span>
									<svg
										width="12"
										height="14"
										viewBox="0 0 12 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.66665 3.66667C8.66665 4.37391 8.3857 5.05219 7.8856 5.55229C7.3855 6.05238 6.70722 6.33333 5.99998 6.33333C5.29274 6.33333 4.61446 6.05238 4.11436 5.55229C3.61426 5.05219 3.33331 4.37391 3.33331 3.66667C3.33331 2.95942 3.61426 2.28115 4.11436 1.78105C4.61446 1.28095 5.29274 1 5.99998 1C6.70722 1 7.3855 1.28095 7.8856 1.78105C8.3857 2.28115 8.66665 2.95942 8.66665 3.66667V3.66667ZM5.99998 8.33333C4.7623 8.33333 3.57532 8.825 2.70015 9.70017C1.82498 10.5753 1.33331 11.7623 1.33331 13H10.6666C10.6666 11.7623 10.175 10.5753 9.29981 9.70017C8.42464 8.825 7.23766 8.33333 5.99998 8.33333V8.33333Z"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span>Ostseebad Göhren</span>
							</p>
						</div>

						<h2 className="mb-3 font-medium">Viel los im Ostseebad Göhren Rückblick und Ausblick</h2>
						<p>Der Urlaubssommer im Ostseebad Göhren ist beendet und der Herbst ist in vollem Gange.</p>
						<Link href="/">
							<a className="flex items-center gap-2 group mt-6 font-medium">
								<span>weiterlesen</span>
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
						</Link>
					</div>
					<div className="col-span-1">
						<div className="w-full">
							<img src="/" alt="" className="w-full aspect-square bg-slate-200" />
						</div>

						<div className="flex items-center gap-8 text-slate-400 text-sm my-6">
							<p className="flex items-center gap-2">
								<span>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.33333 3.66667V1V3.66667ZM9.66667 3.66667V1V3.66667ZM3.66667 6.33333H10.3333H3.66667ZM2.33333 13H11.6667C12.0203 13 12.3594 12.8595 12.6095 12.6095C12.8595 12.3594 13 12.0203 13 11.6667V3.66667C13 3.31304 12.8595 2.97391 12.6095 2.72386C12.3594 2.47381 12.0203 2.33333 11.6667 2.33333H2.33333C1.97971 2.33333 1.64057 2.47381 1.39052 2.72386C1.14048 2.97391 1 3.31304 1 3.66667V11.6667C1 12.0203 1.14048 12.3594 1.39052 12.6095C1.64057 12.8595 1.97971 13 2.33333 13Z"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span>12.10.2022</span>
							</p>
							<p className="flex items-center gap-2">
								<span>
									<svg
										width="12"
										height="14"
										viewBox="0 0 12 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.66665 3.66667C8.66665 4.37391 8.3857 5.05219 7.8856 5.55229C7.3855 6.05238 6.70722 6.33333 5.99998 6.33333C5.29274 6.33333 4.61446 6.05238 4.11436 5.55229C3.61426 5.05219 3.33331 4.37391 3.33331 3.66667C3.33331 2.95942 3.61426 2.28115 4.11436 1.78105C4.61446 1.28095 5.29274 1 5.99998 1C6.70722 1 7.3855 1.28095 7.8856 1.78105C8.3857 2.28115 8.66665 2.95942 8.66665 3.66667V3.66667ZM5.99998 8.33333C4.7623 8.33333 3.57532 8.825 2.70015 9.70017C1.82498 10.5753 1.33331 11.7623 1.33331 13H10.6666C10.6666 11.7623 10.175 10.5753 9.29981 9.70017C8.42464 8.825 7.23766 8.33333 5.99998 8.33333V8.33333Z"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span>Ostseebad Göhren</span>
							</p>
						</div>

						<h2 className="mb-3 font-medium">Viel los im Ostseebad Göhren Rückblick und Ausblick</h2>
						<p>Der Urlaubssommer im Ostseebad Göhren ist beendet und der Herbst ist in vollem Gange.</p>
						<Link href="/">
							<a className="flex items-center gap-2 group mt-6 font-medium">
								<span>weiterlesen</span>
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
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BlogTeaser;
