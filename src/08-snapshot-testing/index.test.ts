// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  const values = ['one', 'two', 'three'];
  const expectedLinkedList = {
    value: 'one',
    next: {
      value: 'two',
      next: {
        value: 'three',
        next: {
          value: null,
          next: null,
        },
      },
    },
  };

  test('should generate linked list from values 1', () => {
    expect(generateLinkedList(values)).toStrictEqual(expectedLinkedList);
  });

  test('should generate linked list from values 2', () => {
    expect(generateLinkedList(values)).toMatchSnapshot();
  });
});
