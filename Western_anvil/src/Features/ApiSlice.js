import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  "X-RapidAPI-Key": "b586524f7dmshef96d038d1f59dap129727jsn7c0aae24cfbf",
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
    getEpisodesList: builder.query({
      query: (ChannelId) =>
        createRequest(`/episode_list/v2?cid=${ChannelId}&limit=200`),
    }),
    getEpisodeDetails: builder.query({
      query: (EpisodeId) => createRequest(`/episode/v4?eid=${EpisodeId}`),
    }),
  }),
});

export const {
  useGetSearchPodcastChannelQuery,
  useGetChannelDetailsQuery,
  useGetEpisodesListQuery,
  useGetEpisodeDetailsQuery
} = podcastApi;
