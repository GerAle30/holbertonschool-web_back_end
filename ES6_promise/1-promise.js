export default function getFulllResponseFromApi(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'Success' });
        } else {
            resolve({ status: 500, body: 'The fake API is not working currently' });
        }
    });
}
