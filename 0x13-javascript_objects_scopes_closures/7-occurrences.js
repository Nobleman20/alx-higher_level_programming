#!/usr/bin/node
// By Emmanuel Oluyege

exports.nbOccurences = function (list, searchElement) {
  return list.reduce((count, current) => current === searchElement ? count + 1 : count, 0);
};
