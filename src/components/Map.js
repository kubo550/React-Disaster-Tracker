import { MapContainer, TileLayer } from "react-leaflet";
import { fetchCovidData, params } from "../api";
import { useQuery } from "react-query";
import Markers from "./Markers";
import Circles from "./Circles";

const Map = ({ data, center, zoom }) => {
  const { data: covidData } = useQuery("c19", fetchCovidData, params);
  return (
    <>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {covidData?.length && <Circles data={covidData} />}

        <Markers data={data.events} />
      </MapContainer>
    </>
  );
};

export default Map;
