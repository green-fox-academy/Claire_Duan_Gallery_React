import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  const { images, currentIndex } = state;
  return {
    title: images[currentIndex].title,
  };
};

const ImgTitle = connect(
  mapStateToProps,
  null,
)(Header);

export default ImgTitle;
