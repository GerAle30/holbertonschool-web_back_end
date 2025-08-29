import { uploadPhoto, createUser, createUser } from './utils';

//handle multiple successful promises
export defualt function handleProfileSignup(){
    .then(([photo, user]) => {
        console.log('${photo.body} ${user.firstName} ${user.lastName}');
        return { body: photo.body, firstName: user.firstName, lastName: user.lastName };
    })
        .catch(() => {
            console.log('Signup system offline');
            return null;
        });
}
