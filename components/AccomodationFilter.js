const AccomodationFilter = ({ toggleMap }) => {
	return (
		<div className="px-8 mx-auto flex items-center justify-between bg-slate-100 border-b border-slate-300 py-2">
			<div className="flex items-center text-slate-500 text-sm gap-2">
				<span>
					<svg className="h-5 w-5" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5 5H15H5ZM5 9H9H5ZM10 17L6 13H3C2.46957 13 1.96086 12.7893 1.58579 12.4142C1.21071 12.0391 1 11.5304 1 11V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V11C19 11.5304 18.7893 12.0391 18.4142 12.4142C18.0391 12.7893 17.5304 13 17 13H14L10 17Z"
							stroke="#6A7173"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
				<p>Wir haben 87 Unterkünfte für Sie gefunden.</p>
			</div>
			<div className="flex items-center gap-16">
				<div className="flex items-center gap-4">
					<select name="" id="" className="bg-transparent p-2">
						<option value="">Art der Unterkunft</option>
						<option value="Ferienwohnung">Ferienwohnung</option>
						<option value="Ferienhaus">Ferienhaus</option>
						<option value="Hotel">Hotel</option>
					</select>
				</div>
				<div className="relative" onClick={toggleMap}>
					<span className="flex items-center gap-2 cursor-pointer">
						<span>
							<svg viewBox="0 0 20 18" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M13 1L7 4M7 17L1.553 14.276C1.38692 14.193 1.24722 14.0654 1.14955 13.9075C1.05188 13.7496 1.0001 13.5677 1 13.382V2.618C1.00009 2.44761 1.04372 2.28007 1.12674 2.13127C1.20977 1.98248 1.32944 1.85736 1.47439 1.76781C1.61935 1.67825 1.78479 1.62721 1.95501 1.61955C2.12522 1.61188 2.29458 1.64784 2.447 1.724L7 4V17ZM7 17L13 14L7 17ZM7 17V4V17ZM13 14L17.553 16.276C17.7054 16.3522 17.8748 16.3881 18.045 16.3805C18.2152 16.3728 18.3806 16.3218 18.5256 16.2322C18.6706 16.1426 18.7902 16.0175 18.8733 15.8687C18.9563 15.7199 18.9999 15.5524 19 15.382V4.618C18.9999 4.43234 18.9481 4.25037 18.8504 4.09247C18.7528 3.93458 18.6131 3.80699 18.447 3.724L13 1V14ZM13 14V1V14Z"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
						<span>Ansicht wechseln</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default AccomodationFilter;
