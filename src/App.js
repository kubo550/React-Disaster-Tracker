// * todo import { useState } from "react";
import { useQuery } from "react-query";
import { fetchNasaData, params } from "./api";
import Loading from "./components/Loading";
import Map from "./components/Map";

const App = () => {
  // * todo const [showCovid, setShowCodiv] = useState(true);

  const { data, isLoading } = useQuery("fetchNasaData", fetchNasaData, params);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Map data={data} center={[39, -104]} zoom={4} />
    </>
  );
};

export default App;
