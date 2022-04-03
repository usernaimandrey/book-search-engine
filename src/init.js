import App from './components/App/App.jsx';
import { Provider } from 'react-redux';
import store from './slices/index.jsx';

const init = async () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default init;
