import { connect } from 'react-redux';
import PictureDisplay from '../components/PictureDisplay';

const mapStateToProps = (state) => {
  const { images, currentIndex } = state;
  return {
    url: images[currentIndex].url,
  };
};

const ImageShow = connect(
  mapStateToProps,
  null,
)(PictureDisplay);

export default ImageShow;
