const url = 'https://www.googleapis.com';
const api = 'books/v1/volumes';

const getRout = () => [url, api].join('/');

export default getRout;