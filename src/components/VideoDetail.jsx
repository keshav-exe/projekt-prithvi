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

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        padding: { sx: 0, md: "0 1em" },
        width: { sx: "auto", md: "auto" },
      }}
    >
      <Box
        sx={{
          width: { sx: "auto", md: "auto" },
          height: { sx: "auto", md: "90vh" },
          padding: { sx: 0, md: "0 1em" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box flex={1}>
        <Box
          sx={{
            top: 0,
            width: "100%",
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Box
            sx={{
              backgroundColor: "#1f1f1f",
              borderRadius: "1em",
              margin: "0.5em ",
            }}
          >
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
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
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
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
      </Box>
      <Box>
        <Typography
          color="#fff"
          variant="h5"
          fontWeight="bold"
          p={2}
          sx={{ position: "sticky" }}
        >
          Recommended
        </Typography>
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{
            overflowY: "auto",
            height: "82vh",
          }}
        >
          <Videos videos={videos} direction="column" height="90vh" />
        </Box>
      </Box>
    </Stack>
  );
};

export default VideoDetail;
