import { uploadPhoto, createUser } from './utils.js';

//handle multiple successful promises
export default function handleProfileSignup(){
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
        console.log('${photo.body} ${user.firstName} ${user.lastName}');
        return { body: photo.body, firstName: user.firstName, lastName: user.lastName };
    })
        .catch(() => {
            console.log('Signup system offline');
            return null;
        });
}
