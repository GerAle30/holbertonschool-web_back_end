import uploadPhoto from './5-photo-reject.js';

uploadPhoto('guillaume.jpg')
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
