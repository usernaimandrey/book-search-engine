import axios from 'axios';

export  const request = async (text, categorie) => {
    const url = new URL('https://www.googleapis.com/books/v1/volumes');
    const subject = categorie === 'all' ? null : `+subject:${categorie}`;
    url.searchParams.append('q', `${text}${subject}`); // subject берем из категории
    // url.searchParams.append('q', 'subject:history');
    url.searchParams.append('key', process.env.REACT_APP_API_KEY);
    console.log(url);
    const { data } = await axios.get(url);
    console.log(data);
};
