import React from 'react';

const ImageList = ({ images }) => {
  const theImages = images.map(({ id, description, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />
  })
return <div>{theImages}</div>
}

export default ImageList