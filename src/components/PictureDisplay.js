import React from 'react';
import PropTypes from 'prop-types';

function PictureDisplay(props) {
  const { url } = props;
  return (
    <img className="show display" src={url} alt="" />
  );
}

PictureDisplay.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PictureDisplay;
