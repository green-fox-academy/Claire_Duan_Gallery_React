import React from 'react';
import Previous from '../containers/Previous';
import Next from '../containers/Next';
import ImgContainer from './ImgContainer';

function ShowContainer() {
  return (
    <div className="show-container">
      <Previous />
      <ImgContainer />
      <Next />
    </div>
  );
}

export default ShowContainer;
