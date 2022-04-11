import ReactDOM from 'react-dom';
import init from './init';
import './index.css';

const runApp = async () => {
    const vDom = await init();
    ReactDOM.render(vDom, document.getElementById('root'));
};

runApp();
