export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';

export function leftClick(index) {
  return { type: LEFT, data: index };
}

export function rightClick(index) {
  return { type: LEFT, data: index };
}
