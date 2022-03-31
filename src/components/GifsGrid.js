import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "./hooks/useFetchGifs";
import laoder from '../assets/loader.svg'

export const GifsGrid = ({ category }) => {
  const { data: Images, laoding } = useFetchGifs(category);

  console.log(Images);

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      
      {laoding && <img src={laoder} alt="cargando" className="loader" />}

      <div className="gifs__container">
        {Images.map((image) => (
          <GifGridItem {...image} key={image.id} />
        ))}
      </div>
    </>
  );
};
