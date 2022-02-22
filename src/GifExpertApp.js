import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["ONe punch", "Samuray", "Dragon ball"];
  const [categories, setCategories] = useState(["One punch"]);

  //   const hadleAdd = (e) => {
  //     setCategories([...categories, "hunter"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
