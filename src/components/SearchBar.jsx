import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "0.75em",
        border: "3px solid #273348",
        padding: "0.2em 1.25em",
        boxShadow: "none",
        backgroundColor: "#dcd8d8",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ backgroundColor: "#dcd8d8", padding: "1em 0" }}
      />
      {/* <IconButton
        type="submit"
        sx={{
          color: "#b62ac1",
        }}
      >
        <Search />
      </IconButton> */}
    </Paper>
  );
};

export default SearchBar;
