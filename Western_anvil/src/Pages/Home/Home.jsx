import React, { useState } from "react";
import { useGetSearchPodcastChannelQuery } from "../../Features/ApiSlice";
const Home = () => {
  const [search, setSearch] = useState("وعي");
  let newData;
  let {
    data,
    isFetching,
    isSuccess,
    error,
    isError,
  } = useGetSearchPodcastChannelQuery(search);
  if (isFetching) {
    return <h1>Loading</h1>
  } else if (isSuccess) {
    newData =data?.data?.channel_list[0]?.cid;
  } else if (isError) {
   return  <h1>Data Missed</h1>
  }
  console.log(newData);
  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />

    </div>
  );
};

export default Home;
