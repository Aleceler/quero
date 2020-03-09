import { init } from '@rematch/core';
import createPersistPlugin from '@rematch/persist';
import * as models from './models';


const persist = createPersistPlugin({
  version: 2,
  whitelist: [
  ],
});

const store = init({
  models,
  plugins: [persist],
});

export default store;
