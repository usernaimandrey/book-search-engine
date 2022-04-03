import axios from 'axios';
import getRout from '../routes.js';

const request = async (text, categorie, oredrBy, startIndex) => {
    const countItems = 30;
    const subject = categorie === 'All' ? '' : `+subject:${categorie}`;
    const rout = `${getRout()}?q=${text}${subject}`;
    const url = new URL(rout);
    url.searchParams.append('startIndex', startIndex);
    url.searchParams.append('maxResults', countItems);
    url.searchParams.append('orderBy', oredrBy);
    url.searchParams.append('key', process.env.REACT_APP_API_KEY);
    const { data } = await axios.get(url);
    return data;
};

export default request;
