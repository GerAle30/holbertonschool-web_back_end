export default function getFulllResponseFromApi(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'Success' });
        } else {
            resolve(new Error('The fake API is not working currently'));
        }
    });
}
