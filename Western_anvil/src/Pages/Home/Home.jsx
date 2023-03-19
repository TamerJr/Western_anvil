import React, { useEffect, useState } from "react";
import { useGetPodcastChannelQuery } from "../../Features/ApiSlice";
const Home = () => {
  const [search, setSearch] = useState("وعي");
  let getData;

    const handleSearch = () => {
      let { data, isFetching, isSuccess } = useGetPodcastChannelQuery(search);
      if (isFetching) {
        console.log("..loading");
      } else if (isSuccess) {
        getData = data;
        console.log(getData);
      }
    };
    handleSearch();


  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Home;
