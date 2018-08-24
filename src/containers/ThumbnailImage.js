import { connect } from 'react-redux';
import { select } from '../actions';
import ThumbnailImg from '../components/ThumbnailImg';

const mapStateToProps = (state, ownProps) => {
  const { images } = state;
  const { index } = ownProps;
  return {
    url: images[index].url,
    index,
  };
};

const mapDispatchToProps = dispatch => ({
  callback: function callback(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.index);
    dispatch(select(e.target.index));
  },
});

const ThumbnailImage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThumbnailImg);

export default ThumbnailImage;
