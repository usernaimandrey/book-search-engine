import axios from 'axios';

export  function request(text) {
    const response =  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`);
         response.then((data) => console.log(data.data));
         
}
