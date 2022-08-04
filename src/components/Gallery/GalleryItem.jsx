import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Gallery.scss'

const GalleryItem = ({ image }) => {
  return (
    <div className="gallery-item">
      <LazyLoadImage
        className="gallery-image" 
        alt="Cat"
        effect="blur"
        src={image.url} 
        />
        {/* <img className="gallery-image" src={image.url} alt="Cat" /> */}
    </div>
  )
}

export default GalleryItem