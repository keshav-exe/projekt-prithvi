import React from "react";

import { Stack } from "@mui/system";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    flexDirection="row"
    sx={{
      overflowY: "auto",
      overflowX: "auto",
      // height: { sx: "auto", md: "" },
      // flexDirection: { sx: "row", md: "column" },
      padding: "1em 0",
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#111825",
          color: "#dcd8d8",
        }}
        key={category.name}
      >
        <span
          style={{
            // color: category.name === selectedCategory ? "#dcd8d8" : "#b62ac1",
            color: "#dcd8d8",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Categories;
