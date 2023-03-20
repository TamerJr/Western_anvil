import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetChannelDetailsQuery,
  useGetEpisodesListQuery,
} from "../../Features/ApiSlice";
import VedioDetails from "../VedioDetails/VedioDetails";
import "./ChannelDetails.css"
const ChannelDetails = () => {
  const { id } = useParams();
  const {
    data: dataChannel,
    isSuccess: isSuccessChannel,
    isLoading: isLoadingChannel,
    isError: isErrorChannel,
    error: dataError,
  } = useGetChannelDetailsQuery(id);

  const {
    data: episodesList,
    isSuccess: isSuccessChannelFeed,
    isLoading: isLoadingChannelFeed,
    isError: isErrorChannelFeed,
    error: dataErrorFeed,
  } = useGetEpisodesListQuery(id);
  let epiList = episodesList?.data?.episode_list;
  let channelDetails = dataChannel?.data;
  console.log(epiList)
  // let reversed=epiList?.reverse()
  return (
    <section className="ChannelDetails_section">
      <div className="ChannelDetails_Cover">
        <img src={channelDetails?.big_cover_url} alt="Channel_Img"/>
        <h1>{channelDetails?.title}</h1>
        <h3>
          {channelDetails?.description}
        </h3>
      </div>
      <div className="Episodes_Countainer">
        {epiList?.map(episode=>
          <VedioDetails EpisodeDetails={episode} key={episode?.eid}/>
          )}
      </div>
      
    </section>
  )
}

export default ChannelDetails