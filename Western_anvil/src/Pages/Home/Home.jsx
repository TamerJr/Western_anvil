import React, { Suspense, useState } from "react";
import ChannelCard from "../../Components/ChannelCard/ChannelCard";
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
  
    newData = data?.data?.channel_list;
 
  console.log(newData);
  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
        
      <Suspense fallback={<h1>Laoding</h1>}>
        {newData?.map(ele=>
            <ChannelCard ChannelsList={ele} key={ele.cid}/>
            )}
            </Suspense>
    </div>
  );
};

export default Home;
