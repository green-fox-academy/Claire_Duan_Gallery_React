import { LEFT, RIGHT } from '../actions';

export default function currentIndex(value = 0, action) {
  switch (action.type) {
    case LEFT:
      return value + action.data;
    case RIGHT:
      return (value > action.data) ? value - action.data : 8;
    default:
      return value;
  }
}
