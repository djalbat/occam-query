"use strict";

import { arrayUtilities } from "necessary";

export const { clear, push, second, third, fourth, fifth } = arrayUtilities;

export function includes(array, ...elements) {
  return elements.some((element) => array.includes(element));
}
