import { LEFT, RIGHT, SELECT } from '../actions';

export default function currentIndex(value = 0, action) {
  switch (action.type) {
    case LEFT:
      return (value >= action.data) ? value - action.data : 8;
    case RIGHT:
      return (value + action.data < 8) ? value + action.data : 0;
    case SELECT:
      return action.data;
    default:
      return value;
  }
}
