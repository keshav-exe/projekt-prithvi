import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

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
    <Box
      minHeight="95vh"
      sx={{
        flexDirection: { sx: "column", md: "column" },
        padding: { sx: "0 0em", md: "0 8em" },
        width: "100vw",
        backgroundColor: "#191819",
      }}
    >
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(35,0,37,1) 0%, rgba(105,0,113,1) 50%, rgba(236,0,255,1) 100%)",
            zIndex: 10,
            height: "25vh",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          overflowX: "auto",
          height: "92vh",
          width: "100%",
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
