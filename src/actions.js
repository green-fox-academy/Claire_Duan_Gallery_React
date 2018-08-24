export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const SELECT = 'SELECT';

export function leftClick(index) {
  return { type: LEFT, data: index };
}

export function rightClick(index) {
  return { type: RIGHT, data: index };
}

export function select(index) {
  return { type: SELECT, data: index };
}
