// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios'); // Мокаем axios

const BASE_URL = { baseURL: 'https://jsonplaceholder.typicode.com' };

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers(); // Используем фейковые таймеры для управления throttle
  });

  beforeEach(() => {
    mockedAxios.create.mockReturnThis(); // Возвращаем тот же объект при вызове create
    jest.clearAllMocks(); // Очищаем все моки перед каждым тестом
  });

  afterEach(() => {
    jest.runAllTimers(); // Проматываем таймеры после каждого теста
  });

  afterAll(() => {
    jest.useRealTimers(); // Восстанавливаем реальные таймеры
  });

  const mockedAxios = jest.mocked(axios);

  test('should create instance with provided base url', async () => {
    const expectedData = { data: 'Fake Data' };

    mockedAxios.get.mockResolvedValue(expectedData);

    await throttledGetDataFromApi('/posts/1');

    expect(mockedAxios.create).toBeCalledWith(BASE_URL);
  });

  test('should perform request to correct provided url', async () => {
    const expectedData = { data: 'Fake Data' };
    mockedAxios.get.mockResolvedValue(expectedData);

    await throttledGetDataFromApi('/posts/1');

    expect(mockedAxios.get).toBeCalledWith('/posts/1');
  });

  test('should return response data', async () => {
    const expectedData = { data: 'Fake Data' };
    mockedAxios.get.mockResolvedValue(expectedData);

    const result = await throttledGetDataFromApi('/posts/1');

    expect(result).toBe(expectedData.data);
  });
});
