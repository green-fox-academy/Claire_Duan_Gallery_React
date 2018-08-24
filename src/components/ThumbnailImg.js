import React from 'react';
import PropTypes from 'prop-types';

function ThumbnailImg(props) {
  const { url, callback, index } = props;
  return (<img className="thumbnailImg" index={index} src={url} alt="" onClick={callback} onKeyPress={()=>{}}/>);  {/*eslint-disable-line*/}
}

ThumbnailImg.propTypes = {
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ThumbnailImg;
