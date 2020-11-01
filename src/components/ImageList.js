import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const theImages = images.map(image => {
    return <ImageCard key={image.id} image={image} />
  })
return <div className="image-list">{theImages}</div>
}

export default ImageList