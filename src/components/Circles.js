import { Circle } from "react-leaflet";
import { getGeoLocation } from "../helper";

const Circles = ({ data }) =>
  data.map(({ stateName, positive }) => {
    const { id, lat, lng } = getGeoLocation(stateName);
    return (
      <Circle
        key={id}
        center={{ lat, lng }}
        fillColor='red'
        radius={positive * 0.4}
        color='#ff2112'
      />
    );
  });

export default Circles;
