import { connect } from 'react-redux';
import { leftClick } from '../actions';
import LeftArrow from '../components/LeftArrow';

const mapDispatchToProps = dispatch => ({
  callback: function callback() {
    dispatch(leftClick(1));
  },
});

const Previous = connect(
  null,
  mapDispatchToProps,
)(LeftArrow);

export default Previous;
