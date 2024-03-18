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
    <Box minHeight="95vh" sx={{ margin: "0 7em", padding: "0" }}>
      <Typography
        fontFamily={"Montserrat"}
        sx={{
          position: "sticky",
          margin: "0.25em",
          color: "#dcd8d8",
          fontSize: { md: "2em", sx: "1em" },
        }}
      >
        Search Results For :
        <span style={{ color: "#b62ac1", fontWeight: "bold" }}>
          {" "}
          {searchTerm}{" "}
        </span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
