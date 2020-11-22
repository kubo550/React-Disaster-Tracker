import axios from "axios";

const NASA_DATA_URL = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events";
const COVID_DATA_URL = "https://api.covidtracking.com/v1/states/current.json";

export const params = {
  staleTime: Infinity,
  cacheTime: Infinity,
};

export const fetchNasaData = async () => {
  const { data } = await axios(NASA_DATA_URL);
  // * todo include all categories (12 === volcano)
  data.events = data.events.filter(e => e.categories[0].id !== 12);

  return data;
};

export const fetchCovidData = async () => {
  const { data } = await axios(COVID_DATA_URL);
  const dataArr = [];

  data.forEach(({ state, positive, death }) => {
    dataArr.push({ stateName: state, positive, death });
  });
  
  return dataArr;
};
