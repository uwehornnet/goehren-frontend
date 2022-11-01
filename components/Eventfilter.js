import Flatpickr from "react-flatpickr";
import { German } from "flatpickr/dist/l10n/de.js";

import "flatpickr/dist/themes/airbnb.css";
const EventFilter = () => {
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
				<p>Wir haben 87 Veranstaltungen für Sie gefunden.</p>
			</div>
			<div className="flex items-center justify-end gap-4">
				<div className="flex items-center gap-4">
					Zeitraum von:
					<Flatpickr
						options={{
							locale: German,
							minDate: new Date(),
						}}
						value={new Date()}
						onChange={(props) => console.log(props)}
						className="bg-transparent p-2 w-auto max-w-[100px]"
					/>
				</div>

				<div className="flex items-center gap-4">
					bis:
					<Flatpickr
						options={{
							locale: German,
							minDate: new Date(),
						}}
						value={new Date()}
						onChange={(props) => console.log(props)}
						className="bg-transparent p-2 w-auto max-w-[100px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default EventFilter;
