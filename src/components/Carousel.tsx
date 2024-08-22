import React from 'react';
import { Carousel } from 'react-bootstrap';

interface MediaDTO {
  url: string;
  thumbnail: boolean;
}

interface Props {
  media: MediaDTO[];
}

const ImageCarousel: React.FC<Props> = ({ media }) => {
  const sortedMedia = media.sort((a, b) => (b.thumbnail ? 1 : -1));

  return (
    <Carousel>
      {sortedMedia.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            src={item.url}
            alt={`Slide ${index}`}
            className="d-block w-100"
            style={{ objectFit: 'cover', maxHeight: 600 }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;