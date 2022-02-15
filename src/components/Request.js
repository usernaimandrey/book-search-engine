import axios from 'axios';

export  function request(text) {
    const response =  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}+inauthor:keyes&key=AIzaSyAIH6MET0pwiG0rPsy4dGoNllnz7UTvhAI`);
         response.then((data) => console.log(data.data));
         
}