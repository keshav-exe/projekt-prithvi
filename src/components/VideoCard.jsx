import React from "react";

import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "90vw", sm: "364px", md: "300px" },
      margin: { xs: "0.5em 1em", sm: "0.5em", md: "0.5em" },
      backgroundColor: "#090f1a",
      borderRadius: "0.5em",
      border: "2px solid #273348",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{
          width: { xs: "100%", sm: "364px", md: "300px" },
          height: { xs: "180px", sm: "200ox", md: "170px" },
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: "#090f1a",
        height: "2em",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          variant="subtitle2"
          fontFamily={'"Montserrat", sans-serif'}
          color="#dcd8d8"
          width={"100%"}
          noWrap
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography
          variant="subtitle2"
          color="gray"
          fontFamily={'"Montserrat", sans-serif'}
        >
          {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
