import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api = axios.create({
  baseURL: 'https://testapi.io/api/redealumni',
});

export const mock = new MockAdapter(api, { delayResponse: 2000 });

export default api;
