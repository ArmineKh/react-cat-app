import React from 'react'
import Card from 'react-bootstrap/Card';

const ImageCard = ({ imgSrc, imgCategory }) => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imgSrc} style={{maxHeight: "150px", objectFit: "cover"}} />
    </Card>
  )
}

export default ImageCard