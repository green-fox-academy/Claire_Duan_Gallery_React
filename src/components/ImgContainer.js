import React from 'react';
import ImageShow from '../containers/ImageShow';
import DescriptionContainer from './DescriptionContainer';

function ImgContainer() {
  return (
    <div className="img-container">
      <ImageShow />
      <DescriptionContainer />
    </div>
  );
}

export default ImgContainer;
