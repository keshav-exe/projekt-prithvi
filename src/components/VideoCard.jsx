import React from "react";

import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
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
      backgroundColor: "#111111",
      margin: "0.5em",
      width: { xs: "480px", sm: "364px", md: "300px" },
      borderRadius: "0.5em",
      border: "2px solid #1f1f1fff",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{
          width: { xs: "100%", sm: "364px", md: "300px" },
          height: { xs: 270, sm: 200, md: 170 },
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: "#111111",
        height: "2em",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography
          variant="subtitle2"
          fontFamily={'"Montserrat", sans-serif'}
          color="#FFF"
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
