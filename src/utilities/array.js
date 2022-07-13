"use strict";

import { arrayUtilities } from "necessary";

export const { clear, push, second, third, fourth, fifth } = arrayUtilities;

export function trim(array, startIndex, endIndex) {
  let start,
      deleteCount;

  if (endIndex !== Infinity) {
    start = endIndex + 1;

    array.splice(start);
  }

  start = 0;
  deleteCount = startIndex; ///

  array.splice(start, deleteCount);
}

export function includes(array, ...elements) {
  return elements.some((element) => array.includes(element));
}
