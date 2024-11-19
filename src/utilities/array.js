"use strict";

import { arrayUtilities } from "necessary";

export const { clear, push, first, second, third, fourth, fifth, last } = arrayUtilities;

export function trim(array, startIndex, endIndex) {
  if (startIndex < 0) {
    const length = array.length; ///

    startIndex = length + startIndex; ///

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
  return elements.some((element) => array.includes(element));
}
