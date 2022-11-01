import Link from "next/link";

const Service = () => {
	return (
		<main>
			<div className="container mx-auto mt-16">
				<h1 className="text-big max-w-[760px] mb-8">Publikationen & Downloads</h1>
				<p className="max-w-[760px]">
					Zum Speichern der Dokumente auf Ihrem PC, klicken Sie auf dem Link die rechte Maustaste und wählen
					Ziel speichern unter. Anschließend finden Sie das PDF-Dokument in Ihrem Download Ordner oder werden
					aufgefordert einen Speicherplatz auf Ihrem PC festzulegen. In Kürze werden an dieser Stelle die
					Publikationen ergänzt. Zum Anzeigen der PDF-Dateien wird zusätzlich der Adobe-Reader benötigt. Sie
					können ihn hier bei Adobe direkt herunterladen und installieren.
				</p>
				<div className="mt-16">
					<h2 className="text-medium">Handouts & Flyer</h2>

					<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-x-4 gap-y-16 mt-8">
						<div className="col-span-1">
							<Link href="">
								<img src="" alt="" className="bg-slate-200 w-full aspect-portrait mb-8" />
							</Link>
							<div className="flex items-center justify-center gap-8 text-slate-400 text-sm my-3">
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
							<Link href="">
								<h3 className="text-center">Infoblatt - Aktuell 4/2021</h3>
							</Link>
						</div>

						<div className="col-span-1">
							<Link href="">
								<img src="" alt="" className="bg-slate-200 w-full aspect-portrait mb-8" />
							</Link>
							<div className="flex items-center justify-center gap-8 text-slate-400 text-sm my-3">
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
							<Link href="">
								<h3 className="text-center">Infoblatt - Aktuell 4/2021</h3>
							</Link>
						</div>
						<div className="col-span-1">
							<Link href="">
								<img src="" alt="" className="bg-slate-200 w-full aspect-portrait mb-8" />
							</Link>
							<div className="flex items-center justify-center gap-8 text-slate-400 text-sm my-3">
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
							<Link href="">
								<h3 className="text-center">Infoblatt - Aktuell 4/2021</h3>
							</Link>
						</div>
					</div>
				</div>

				<div className="mt-16">
					<h2 className="text-medium">Handouts & Flyer</h2>

					<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-x-4 gap-y-16 mt-8">
						<div className="col-span-1">
							<Link href="/">
								<a className="w-full aspect-portrait bg-slate-100 block p-8">
									<div className="flex flex-col items-center h-full">
										<svg
											width="66"
											height="83"
											viewBox="0 0 66 83"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20.5714 41.5H45.4286H20.5714ZM20.5714 58.1667H45.4286H20.5714ZM53.7143 79H12.2857C10.0882 79 7.9807 78.122 6.42683 76.5592C4.87296 74.9964 4 72.8768 4 70.6667V12.3333C4 10.1232 4.87296 8.00358 6.42683 6.44078C7.9807 4.87797 10.0882 4 12.2857 4H35.4277C36.5264 4.00024 37.58 4.43938 38.3567 5.22083L60.7861 27.7792C61.5631 28.5604 61.9998 29.62 62 30.725V70.6667C62 72.8768 61.127 74.9964 59.5732 76.5592C58.0193 78.122 55.9118 79 53.7143 79Z"
												stroke="#E4EBF0"
												strokeWidth="7"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<h3 className="text-center font-medium">Infoblatt - Aktuell 4/2021</h3>
								</a>
							</Link>
						</div>
						<div className="col-span-1">
							<Link href="/">
								<a className="w-full aspect-portrait bg-slate-100 block p-8">
									<div className="flex flex-col items-center h-full">
										<svg
											width="66"
											height="83"
											viewBox="0 0 66 83"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20.5714 41.5H45.4286H20.5714ZM20.5714 58.1667H45.4286H20.5714ZM53.7143 79H12.2857C10.0882 79 7.9807 78.122 6.42683 76.5592C4.87296 74.9964 4 72.8768 4 70.6667V12.3333C4 10.1232 4.87296 8.00358 6.42683 6.44078C7.9807 4.87797 10.0882 4 12.2857 4H35.4277C36.5264 4.00024 37.58 4.43938 38.3567 5.22083L60.7861 27.7792C61.5631 28.5604 61.9998 29.62 62 30.725V70.6667C62 72.8768 61.127 74.9964 59.5732 76.5592C58.0193 78.122 55.9118 79 53.7143 79Z"
												stroke="#E4EBF0"
												strokeWidth="7"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<h3 className="text-center font-medium">Infoblatt - Aktuell 4/2021</h3>
								</a>
							</Link>
						</div>
						<div className="col-span-1">
							<Link href="/">
								<a className="w-full aspect-portrait bg-slate-100 block p-8">
									<div className="flex flex-col items-center h-full">
										<svg
											width="66"
											height="83"
											viewBox="0 0 66 83"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20.5714 41.5H45.4286H20.5714ZM20.5714 58.1667H45.4286H20.5714ZM53.7143 79H12.2857C10.0882 79 7.9807 78.122 6.42683 76.5592C4.87296 74.9964 4 72.8768 4 70.6667V12.3333C4 10.1232 4.87296 8.00358 6.42683 6.44078C7.9807 4.87797 10.0882 4 12.2857 4H35.4277C36.5264 4.00024 37.58 4.43938 38.3567 5.22083L60.7861 27.7792C61.5631 28.5604 61.9998 29.62 62 30.725V70.6667C62 72.8768 61.127 74.9964 59.5732 76.5592C58.0193 78.122 55.9118 79 53.7143 79Z"
												stroke="#E4EBF0"
												strokeWidth="7"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<h3 className="text-center font-medium">Infoblatt - Aktuell 4/2021</h3>
								</a>
							</Link>
						</div>
						<div className="col-span-1">
							<Link href="/">
								<a className="w-full aspect-portrait bg-slate-100 block p-8">
									<div className="flex flex-col items-center h-full">
										<svg
											width="66"
											height="83"
											viewBox="0 0 66 83"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20.5714 41.5H45.4286H20.5714ZM20.5714 58.1667H45.4286H20.5714ZM53.7143 79H12.2857C10.0882 79 7.9807 78.122 6.42683 76.5592C4.87296 74.9964 4 72.8768 4 70.6667V12.3333C4 10.1232 4.87296 8.00358 6.42683 6.44078C7.9807 4.87797 10.0882 4 12.2857 4H35.4277C36.5264 4.00024 37.58 4.43938 38.3567 5.22083L60.7861 27.7792C61.5631 28.5604 61.9998 29.62 62 30.725V70.6667C62 72.8768 61.127 74.9964 59.5732 76.5592C58.0193 78.122 55.9118 79 53.7143 79Z"
												stroke="#E4EBF0"
												strokeWidth="7"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<h3 className="text-center font-medium">Infoblatt - Aktuell 4/2021</h3>
								</a>
							</Link>
						</div>
						<div className="col-span-1">
							<Link href="/">
								<a className="w-full aspect-portrait bg-slate-100 block p-8">
									<div className="flex flex-col items-center h-full">
										<svg
											width="66"
											height="83"
											viewBox="0 0 66 83"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20.5714 41.5H45.4286H20.5714ZM20.5714 58.1667H45.4286H20.5714ZM53.7143 79H12.2857C10.0882 79 7.9807 78.122 6.42683 76.5592C4.87296 74.9964 4 72.8768 4 70.6667V12.3333C4 10.1232 4.87296 8.00358 6.42683 6.44078C7.9807 4.87797 10.0882 4 12.2857 4H35.4277C36.5264 4.00024 37.58 4.43938 38.3567 5.22083L60.7861 27.7792C61.5631 28.5604 61.9998 29.62 62 30.725V70.6667C62 72.8768 61.127 74.9964 59.5732 76.5592C58.0193 78.122 55.9118 79 53.7143 79Z"
												stroke="#E4EBF0"
												strokeWidth="7"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<h3 className="text-center font-medium">Infoblatt - Aktuell 4/2021</h3>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Service;
