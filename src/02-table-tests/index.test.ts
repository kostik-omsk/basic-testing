// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 5, b: 5, action: Action.Add, expected: 10 },
  { a: 10, b: 10, action: Action.Add, expected: 20 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 5, b: 5, action: Action.Subtract, expected: 0 },
  { a: 10, b: 10, action: Action.Subtract, expected: 0 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 5, b: 5, action: Action.Multiply, expected: 25 },
  { a: 10, b: 10, action: Action.Multiply, expected: 100 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 100, b: 5, action: Action.Divide, expected: 20 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
  { a: 10, b: 2, action: Action.Exponentiate, expected: 100 },
  {
    a: 2,
    b: 2,
    action: 'invalidAction',
    expected: null,
  },
  {
    a: '2',
    b: 2,
    action: Action.Add,
    expected: null,
  },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected when a is $a, b is $b, and action is $action',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
