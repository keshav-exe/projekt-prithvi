import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date`
    ).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Stack
      sx={{
        flexDirection: "column",
        padding: { sx: "0 0em", md: "0 6em" },
        width: "auto",
        backgroundColor: "#0f0f0f",
      }}
    >
      <ChannelCard channelDetail={channelDetail} />
      <Videos videos={videos} />
    </Stack>
  );
};

export default ChannelDetail;
