export default function getFullResponseFromAPI(sucess) {
    return new Promise((resolve, reject) => {
        if (success) {
            resovle({ status: 200, body: 'Sucess' });
        }
        else{
            reject(new Error('The fake API is not working currently'));
        }
    });
}
