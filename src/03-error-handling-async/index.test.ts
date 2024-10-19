// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const object = { a: 1 };
    const result = await resolveValue(object);
    expect(result).toBe(object);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const msg = 'Pisec!';
    expect(() => throwError(msg)).toThrowError(new Error(msg));
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrowError('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(throwCustomError).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrowError(MyAwesomeError);
    await expect(rejectCustomError()).rejects.toThrowError(
      new MyAwesomeError(),
    );
  });
});
