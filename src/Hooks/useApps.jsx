import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios("../GamesData.json").then((data) => setApps(data.data));
  }, []);
  return { apps };
};

export default useApps;
