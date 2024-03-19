import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { SideBar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "column" },
        padding: { sx: "0 0em", md: "0 8em" },
        width: "100vw",
        backgroundColor: "#191819",
      }}
    >
      <Box
        sx={{
          padding: { sx: "auto", md: "0 1em" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
    </Stack>
  );
};

export default Feed;
