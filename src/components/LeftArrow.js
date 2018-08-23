import React from 'react';
import PropTypes from 'prop-types';

function LeftArrow(props) {
  const { callback } = props;
  return (
    <div className="show arrow left" onClick={callback} role="presentation">
      <img src="../images/arrow.png" alt="left arrow" />
    </div>
  );
}

LeftArrow.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default LeftArrow;
