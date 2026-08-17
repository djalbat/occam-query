"use strict";

import { arrayUtilities } from "necessary";

export const { clear, push, first, second, third, fourth, fifth, last } = arrayUtilities;

export function trim(array, startIndex, endIndex) {
  const length = array.length; ///

  if (startIndex < 0) {
    startIndex = length + startIndex; ///
  }

  if (endIndex < 0) {
    endIndex = length + endIndex; ///
  }

  if (endIndex !== Infinity) {
    const start = endIndex + 1;

    array.splice(start);
  }

  const start = 0,
        deleteCount = startIndex; ///

  array.splice(start, deleteCount);
}

export function includes(array, ...elements) {
  const found = elements.some((element) => {
    const found = array.includes(element);

    if (found) {
      return true;
    }
  });

  return found;
}
