import { connect } from 'react-redux';
import Description from '../components/Description';

const mapStateToProps = (state) => {
  const { images, currentIndex } = state;
  return {
    description: images[currentIndex].description,
  };
};

const ImgDescription = connect(
  mapStateToProps,
  null,
)(Description);

export default ImgDescription;
