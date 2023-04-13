#!/usr/bin/node
//Script by Emmanuel Oluyege

exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) theFunction();
};
