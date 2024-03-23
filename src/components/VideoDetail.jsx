import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    setVideos([]);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0 0", md: "0em 7em" },
        backgroundColor: "#0f0f0f",
      }}
    >
      <Box flex={1}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
          playing
          pip
        />
        <Box
          sx={{
            backgroundColor: "#1f1f1f",
            borderRadius: "1em",
            margin: "1em 0",
            border: "2px solid #273348",
          }}
        >
          <Typography
            p={2}
            fontWeight="bold"
            fontFamily={'"Montserrat", sans-serif'}
            color="#dcd8d8"
            noWrap
            sx={{
              fontSize: { md: "1.75em", sx: "1em" },
            }}
          >
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                {channelTitle}
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          margin: { md: "0 2em", sx: "0" },
          backgroundColor: "#1f1f1f",
          borderRadius: "1em",
          border: "2px solid #273348",
          height: "92vh",
        }}
      >
        <Typography
          color="#fff"
          variant="h5"
          fontWeight="bold"
          padding={"0.75em"}
        >
          Recommended
        </Typography>
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{
            overflowY: "auto",
            height: "80vh",
          }}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Box>
    </Stack>
  );
};

export default VideoDetail;
