import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailImage from '../containers/ThumbnailImage';

function ThumbnailItem(props) {
  const { index } = props;
  return (
    <div className="items">
      <div className="triangle" />
      <div className="thumbnail">
        <ThumbnailImage index={index} />
      </div>
    </div>
  );
}

ThumbnailItem.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ThumbnailItem;
