import React from 'react';
import ThumbnailItem from './ThumbnailItem';

function ThumbnailContainer() {
  return (
    <div className="thumbnailContainer">
      <ThumbnailItem index={0} />
      <ThumbnailItem index={1} />
      <ThumbnailItem index={2} />
      <ThumbnailItem index={3} />
      <ThumbnailItem index={4} />
      <ThumbnailItem index={5} />
      <ThumbnailItem index={6} />
      <ThumbnailItem index={7} />
      <ThumbnailItem index={8} />
    </div>
  );
}

export default ThumbnailContainer;
