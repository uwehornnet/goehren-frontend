import Accomodation from "./Accomodation";

const AccomodationGrid = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-x-4 gap-y-16 mt-8 mb-16">
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
				<Accomodation />
			</div>
		</div>
	);
};

export default AccomodationGrid;
