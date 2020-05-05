"use strict";

const necessary = require("necessary");

const { arrayUtilities } = necessary;

function includes(array, ...elements) {
  return elements.some(function(element) {
    return array.includes(element);
  });
}

Object.assign(arrayUtilities, {
  includes
});

module.exports = arrayUtilities;
