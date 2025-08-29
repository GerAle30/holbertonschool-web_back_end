import handleResponseFromAPI from './2-then.js';

const promise = Promise.resolve();
handleResponseFromAPI(promise).then((res) => console.log(res));

const promise2 = Promise.reject();
handleResponseFromAPI(promise2.then((res) => console.log(res));
