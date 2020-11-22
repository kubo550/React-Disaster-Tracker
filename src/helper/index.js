import statesGeoData from "../statesGeoData.json";

import { Icon } from "leaflet";
import fireIcon from "../icons/Wildfires.png";
import iceIcon from "../icons/Ice.png";
import stormIcon from "../icons/Storm.png";
import volcanoIcon from "../icons/Volcano.png";
import defaultIcon from "../icons/defaultIcon.png";

const statesArray = [...statesGeoData];

export const getGeoLocation = stateName => {
  return statesArray.find(state => state.name === stateName);
};

export const getIcon = iconId => {
  let url;
  switch (iconId) {
    case 8:
      url = fireIcon;
      break;
    case 10:
      url = stormIcon;
      break;
    case 12:
      url = volcanoIcon;
      break;
    case 15:
      url = iceIcon;
      break;

    default:
      url = defaultIcon;
      break;
  }
  const icon = new Icon({
    iconUrl: url,
    iconSize: [25, 25],
  });

  return icon;
};
