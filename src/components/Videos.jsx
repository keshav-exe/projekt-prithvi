import React from "react";

import { Stack, Box } from "@mui/system";
import { VideoCard } from "./";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      width={"100%"}
      margin={"0em"}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
