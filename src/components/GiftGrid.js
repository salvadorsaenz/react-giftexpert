// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem} from './GifGridItem';

export const GiftGrid = ({category}) => {

    const {data: images, loading} = useFetchGifts(category);

  return (
      <>
        <h3>{category}</h3>
        { loading && <p className="animate__animated animate__flash">Loading...</p> }
        <div className="card-grid">
            {
                images.map( img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }/>
                ))
            }
        </div>
      </>
  )
}
