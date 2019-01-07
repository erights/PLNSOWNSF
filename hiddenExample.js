/*global require*/
// Original syntax example from
// https://github.com/zenparsing/hidden-state/blob/master/README.md
// but with gratutous differences from
/*
https://github.com/tc39/proposal-class-fields/issues/183#issuecomment-451733300
*/
// repaired.

const { hiddenState } = require('./hidden-state');

const [getState, initState, isInstance] = hiddenState('Point'); 

class Point {
  
  constructor(x, y) {
    initState(this, { x, y });
  }

  toString() {
    let { x, y } = getState(this);
    return `<${x}:${y}>`;
  }

  add(p) {
    let { x, y } = getState(this);
    let { x: x1, y: y1 } = getState(p);
    return new Point(x + x1, y + y1);
  }

  static isPoint(x) {
    return isInstance(x);
  }
}