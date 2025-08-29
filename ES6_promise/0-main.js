import getFullResponseFromAPI from './1-then.js';

getFullResponseFromAPI(true)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log('API call finished'));

getFullResponseFromAPI(false)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log('API call finished'));

