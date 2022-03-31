import React from 'react';

export const GifGridItem = ({id,title, url}) => {

  return (
    <div className='gifs__item animate__animated animate__fadeInUpBig '>
      <img src={url} alt={title}/>
      <p> { title }</p>
    </div>
  )
}
