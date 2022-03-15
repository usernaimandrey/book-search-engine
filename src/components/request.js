import axios from 'axios';
import getRout from '../routes.js';

const request = async (text, categorie, oredrBy) => {
    const url = new URL(getRout());
    const subject = categorie === 'all' ? '' : `+subject:${categorie}`;
    url.searchParams.append('q', `${text}${subject}`);
    url.searchParams.append('orderBy', oredrBy);
    url.searchParams.append('key', process.env.REACT_APP_API_KEY);
    console.log(url);
    const { data } = await axios.get(url);
    console.log(data);
    return data;
};

export default request;
