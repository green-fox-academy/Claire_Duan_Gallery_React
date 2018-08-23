import { connect } from 'react-redux';
import { rightClick } from '../actions';
import RightArrow from '../components/RightArrow';

const mapDispatchToProps = dispatch => ({
  callback: function callback() {
    dispatch(rightClick(1));
  },
});

const Next = connect(
  null,
  mapDispatchToProps,
)(RightArrow);

export default Next;
