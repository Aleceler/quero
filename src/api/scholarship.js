import api, { mock } from './api';

// the api got a more then 1000 requests and doesnt work since begin the test

mock.onGet('/scholarships').reply(200, require('../db.json').fetch);

const get = async () => {
  const response = await api.get('/scholarships');
  return response.data;
};

export default {
  get,
};
