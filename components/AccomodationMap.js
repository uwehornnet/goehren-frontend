import { MapContainer, TileLayer } from "react-leaflet";

const AccomodationMap = () => {
	return (
		<div className="w-full h-screen bg-slate-200">
			<MapContainer center={[54.34164, 13.7372]} zoom={16} scrollWheelZoom={false} className="w-full h-screen">
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			</MapContainer>
		</div>
	);
};

export default AccomodationMap;
