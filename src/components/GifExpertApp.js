import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifsGrid } from "./GifsGrid";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState();
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />
      {categories.map((category) => (
        <GifsGrid category={category} key={category}/>
      ))}
    </>
  );
};
