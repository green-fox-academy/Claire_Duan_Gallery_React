import React from 'react';
import PropTypes from 'prop-types';

function RightArrow(props) {
  const { callback } = props;
  return (
    <div className="show arrow right" onClick={callback} role="presentation">
      <img src="../images/arrow.png" alt="right arrow" />
    </div>
  );
}

RightArrow.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default RightArrow;
