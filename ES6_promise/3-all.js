import { uploadPhoto, creatUser } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), creatUser()])
    .then(([photo, user]) => {
        console.log('${photo.body} ${user.firstName} ${user.lastName}');
        return { body: photo.body, firstName: user.firstName, lastName: user.lastName };
    })
    .catch(() => {
        console.log('Signup system offline');
    });
}
