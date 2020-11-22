import { Marker, Popup } from "react-leaflet";
import { getIcon } from "../helper";

const Markers = ({ data }) => {
  return data.map(event => {
    const position = [
      event.geometries[0].coordinates[1],
      event.geometries[0].coordinates[0],
    ];
    const icon = getIcon(event.categories[0].id);

    return (
      <Marker key={event.id} position={position} icon={icon}>
        <Popup>{event.title}</Popup>
      </Marker>
    );
  });
};

export default Markers;
