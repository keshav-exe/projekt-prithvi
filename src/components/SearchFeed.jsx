import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      minHeight="92vh"
      sx={{
        margin: { md: "0 7em", sx: "0 2em" },
      }}
    >
      <Typography
        fontFamily={"Montserrat"}
        sx={{
          margin: "0",
          color: "#dcd8d8",
          fontSize: { md: "2em", sx: "2em" },
        }}
      >
        Search Results For :
        <span style={{ fontWeight: "bold" }}> {searchTerm} </span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
