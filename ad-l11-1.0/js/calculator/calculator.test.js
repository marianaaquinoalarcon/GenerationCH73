const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// pruebas para divide
test('Divide 10 entre 2',()=>{
  expect(calculator.divide(10,2)).toBe(5);
});

test('Divide 12.5 entre 2',()=>{
  expect(calculator.divide(12.5,2)).toBe(6.25);
});

test('Divide 12 entre 0',()=>{
  expect(calculator.divide(12,0)).toEqual("No se puede dividir entre 0, es resultado infinito");
  expect(calculator.divide(0,12)).toBe(0);
});

// pruebas para multiply
test('Multiplica 13 * 50',()=>{
  expect(calculator.multiply(13,50)).toBe(650);
});

test('Multiplica 2.2 * 3.3',()=>{
  expect(calculator.multiply(2.2,3.3)).toBe(7.26);
});

