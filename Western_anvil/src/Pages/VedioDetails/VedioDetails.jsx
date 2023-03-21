import React from "react";
import { useParams } from "react-router-dom";
import "./VedioDetails.css";
import ReactAudioPlayer from "react-audio-player";
import { useGetEpisodeDetailsQuery } from "../../Features/ApiSlice";
const VedioDetails = () => {
  const { id } = useParams();
  const {
    data,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetEpisodeDetailsQuery(id);
  const pourData = data?.data;
  console.log(pourData);
  return (
    <div>
      <ReactAudioPlayer src={pourData?.url} 
      controls
      />
    </div>
  );
};

export default VedioDetails;
