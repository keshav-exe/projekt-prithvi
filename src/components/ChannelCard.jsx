import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      display: "flex",
      margin: { xs: "0.5em 1em", sm: "0.5em", md: "0.5em" },
      backgroundColor: "#090f1a",
      borderRadius: "0.5em",
      border: "2px solid #273348",
      padding: "0.5em 4em",
      flexDirection: { xs: "column", md: "row" },
      width: { xs: "auto", md: "80vw" },
      alignItems: "center",
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "2em",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "10em",
            width: "10em",
          }}
        />
        <Box
          sx={{
            flexDirection: "column",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          <Typography
            fontFamily={'"Montserrat", sans-serif'}
            sx={{
              fontWeight: "900",
              color: "#dcd8d8",
              fontSize: { xs: "2em", md: "4em" },
            }}
          >
            {channelDetail?.snippet?.title}
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              fontWeight="400"
              fontFamily={'"Montserrat", sans-serif'}
              color="#dcd8d8"
              fontSize="1em"
              backgroundColor="red"
              padding="0.5em 1em"
              borderRadius="0.5em"
              textAlign="center"
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
              {" Subscribers"}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
