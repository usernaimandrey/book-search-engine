import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './components/App/App.jsx';
import store from './slices/index.js';
import resources from './locale/index.js';

const init = async () => {
    const { books } = store.getState();
    const i18Instance = i18n.createInstance();
    await i18Instance.use(initReactI18next).init({
        lng: books.lng,
        debug: false,
        resources,
    });
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default init;
