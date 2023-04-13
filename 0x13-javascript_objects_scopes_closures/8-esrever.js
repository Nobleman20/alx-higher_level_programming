#!/usr/bin/node
// Emmanuel Oluyege

exports.esrever = function (list) {
  return list.reduceRight(function (array, current) {
    array.push(current);
    return array;
  }, []);
};
