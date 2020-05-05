"use strict";

import { arrayUtilities } from "necessary";

export const { second, third, fourth, fifth } = arrayUtilities;

export function includes(array, ...elements) {
  return elements.some(function(element) {
    return array.includes(element);
  });
}
