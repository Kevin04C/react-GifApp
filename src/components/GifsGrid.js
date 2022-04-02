import React from "react";
import PropTypes from 'prop-types';
import { GifGridItem } from "./GifGridItem";
import laoder from '../assets/loader.svg'
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifsGrid = ({ category }) => {
  const { data: Images, laoding } = useFetchGifs( category );

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

GifsGrid.propTypes = {
  category : PropTypes.string.isRequired,
}