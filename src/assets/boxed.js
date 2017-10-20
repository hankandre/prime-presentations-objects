export const boxed = `var numBox = new Number(2);
var strBox = new String('foo');
var boolBox = new Boolean(false);
var arrBox = new Array(1, 2, 'foo');
var funcBox = new Function(
  'a', 'b', 'return a + b'
);
var objBox = new Object(
  {hello: 'world'}
);


`;
