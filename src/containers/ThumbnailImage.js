import { connect } from 'react-redux';
import { select } from '../actions';
import ThumbnailImg from '../components/ThumbnailImg';

const mapStateToProps = (state, ownProps) => {
  const { images } = state;
  const { index } = ownProps;
  return {
    url: images[index].url,
  };
};

const mapDispatchToProps = dispatch => ({
  callback: function callback(e) {
    // e.target.parentNode.parentNode.firstChild.classList.remove('hide');
    dispatch(select(parseInt(e.target.getAttribute('index'), 10)));
  },
});

const ThumbnailImage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThumbnailImg);

export default ThumbnailImage;
