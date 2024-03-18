import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

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
        flexDirection: { sx: "column", md: "row" },
        margin: "0 auto",
        borderRight: "1px solid #3d3d3d",
        padding: { sx: 0, md: "0 1em" },
        backgroundColor: "#020305",
      }}
    >
      <Box
        sx={{
          width: { sx: "auto", md: "auto" },
          height: { sx: "auto", md: "90vh" },
          padding: { sx: 0, md: "0 1em" },
          position: "sticky",
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
          height: "92vh",
          width: "100%",
          padding: { sx: 0, md: "0 1em" },
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
