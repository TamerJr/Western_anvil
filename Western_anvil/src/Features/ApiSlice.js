import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "X-RapidAPI-Key": "1b6b7a6078msh110cf9747436a82p1c2029jsnb3572d52b80f",
  "X-RapidAPI-Host": "podcast-api1.p.rapidapi.com",
};
const baseUrl = "https://podcast-apil.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: apiHeaders });

export const podcastApi = createApi({
  reducerPath: "podcastApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSearchPodcastChannel: builder.query({
      query: (ChannelName) =>
        createRequest(`/search_channel/v2?keyword=${ChannelName}&limit=200`),
    }),
    getChannelDetails: builder.query({
      query: (ChannelId) => createRequest(`channel/v3?cid=${ChannelId}`),
    }),
    getFeedChannel: builder.query({
      query: (ChannelId) =>
        createRequest(`/episodes/overview?cids=${ChannelId}`),
    }),
    getEpisodeDetails: builder.query({
      query: (EpisodeId) => createRequest(`/episode/v4?eid=${EpisodeId}`),
    }),
  }),
});

export const {
  useGetSearchPodcastChannelQuery,
  useGetChannelDetailsQuery,
} = podcastApi;
