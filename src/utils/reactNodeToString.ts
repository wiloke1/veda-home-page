import { isValidElement } from 'react';

export const reactNodeToString = (reactNode: React.ReactNode) => {
  let string = '';
  if (typeof reactNode === 'string') {
    string = reactNode;
  } else if (typeof reactNode === 'number') {
    string = reactNode.toString();
  } else if (reactNode instanceof Array) {
    reactNode.forEach(child => {
      string += reactNodeToString(child);
    });
  } else if (isValidElement(reactNode)) {
    string += reactNodeToString(reactNode.props.children);
  }
  return string;
};
