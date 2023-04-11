#!/usr/bin/node
// Script by Emmanuel Oluyege

exports.addMeMaybe = function (number, theFunction) {
  theFunction(++number);
};
